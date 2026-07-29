import React, { useEffect, useState } from 'react';
import { ArrowLeft, Radio, HelpCircle, Calendar, Play, Loader2, Video, Tv, Clock, ExternalLink } from 'lucide-react';

const YoutubeIcon = ({ className = "w-3.5 h-3.5 text-red-500" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'AIzaSyCmAWgaG83qyMtd-DNmOH2k4NKcbXX6i6U';
const CHANNEL_ID = 'UCUO5XKjB4VxLhJulwDXmp-g'; 

const LiveStreams = ({ onGoBack }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [liveVideoId, setLiveVideoId] = useState(null);
  const [isLive, setIsLive] = useState(false);
  const [recentVideos, setRecentVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const scheduleItems = [
    { day: "Domingo", time: "11:30 AM", label: "Culto Matutino" },
    { day: "Domingo", time: "07:00 PM", label: "Culto Vespertino" },
    { day: "Miércoles", time: "07:30 PM", label: "Miércoles de Oración" },
    { day: "Viernes", time: "07:30 PM", label: "Celebremos la recuperación" },
    { day: "Sábado", time: "06:30 PM", label: "Jóvenes (JNI)" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    fetchChannelVideos();
  }, []);

  const fetchChannelVideos = async () => {
    setLoading(true);
    try {
      // 1. Consultar si hay una transmisión en vivo activa
      const liveResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`
      );
      const liveData = await liveResponse.json();

      let activeLiveVideo = null;
      if (liveData.items && liveData.items.length > 0) {
        activeLiveVideo = liveData.items[0];
        setLiveVideoId(activeLiveVideo.id.videoId);
        setIsLive(true);
        setSelectedVideo(activeLiveVideo);
      } else {
        setIsLive(false);
        setLiveVideoId(null);
      }

      // 2. Consultar los videos más recientes del canal
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&maxResults=6&key=${API_KEY}`
      );
      const videosData = await videosResponse.json();

      if (videosData.items && videosData.items.length > 0) {
        setRecentVideos(videosData.items);

        // Si no hay transmisión en vivo activa, se asigna el video más reciente
        if (!activeLiveVideo) {
          setSelectedVideo(videosData.items[0]);
        }
      }
    } catch (error) {
      console.error('Error al obtener datos de la API de YouTube:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedVideoId = selectedVideo?.id?.videoId;

  return (
    <section id="transmisiones" className="bg-white py-2 text-[#111111] sm:py-14 min-h-[80vh]">
      <div className="mx-auto max-w-[1150px] w-full px-4 sm:px-8">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-[#4fc1bd]/10 rounded-md border border-[#4fc1bd]/20 mb-2">
              <span className="text-[10px] font-semibold text-[#4fc1bd] inline-flex items-center gap-1.5">
                <Radio className={`w-3.5 h-3.5 text-[#4fc1bd] ${isLive ? 'animate-pulse text-red-500' : ''}`} />
                {isLive ? 'TRANSMISIÓN EN VIVO AHORA' : 'Transmisiones & Servicios'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#111111] leading-tight">
              Sintoniza nuestros <span className="text-[#4fc1bd]">servicios en tiempo real</span>
            </h1>
          </div>

          <button
            type="button"
            onClick={onGoBack || (() => window.history.back())}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-[#111111] shadow-2xs hover:bg-slate-50 transition-all active:scale-95 cursor-pointer w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
            <span>Volver al inicio</span>
          </button>
        </div>

        {/* Rejilla Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Reproductor Principal + Información */}
          <div className="lg:col-span-8 space-y-3">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/80 flex items-center justify-center">
              {loading ? (
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <Loader2 className="w-8 h-8 animate-spin text-[#4fc1bd]" />
                  <span className="text-xs">Cargando transmisión...</span>
                </div>
              ) : selectedVideoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                  title="Reproductor Templo Cristiano de Tuxtla"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-xs text-slate-400">No se pudo cargar el video en este momento.</p>
              )}
            </div>

            {/* BARRA DE INFORMACIÓN DEBAJO DEL REPRODUCTOR */}
            {!loading && selectedVideo && (
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {selectedVideoId === liveVideoId ? (
                      <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-red-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                        EN DIRECTO AHORA
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-[#4fc1bd]/10 text-[#4fc1bd] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#4fc1bd]/20">
                        <Tv className="w-3 h-3" />
                        REPRODUCIENDO EN PANTALLA
                      </span>
                    )}
                    {selectedVideo.snippet?.publishedAt && (
                      <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(selectedVideo.snippet.publishedAt).toLocaleDateString('es-MX', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1 leading-snug">
                    {selectedVideo.snippet?.title}
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: Horarios */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4 shadow-2xs">
              <h2 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#4fc1bd]" />
                Horarios de Transmisión
              </h2>

              <ul className="space-y-3.5 text-xs">
                {scheduleItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center pb-2.5 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-slate-800 leading-tight">{item.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.day}</p>
                    </div>
                    <span className="font-bold text-[#4fc1bd] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 whitespace-nowrap ml-3 shadow-2xs">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                Alternativas para unirte
              </p>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-slate-600">
                <a
                  href={`https://youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:text-[#4fc1bd] transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4.5 h-4.5 text-red-500" />
                    <span>Ver directamente en YouTube</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 group-hover:bg-[#4fc1bd]/10 group-hover:text-[#4fc1bd]">Ir</span>
                </a>

                <a
                  href="#contacto"
                  className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 hover:text-[#4fc1bd] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>¿Problemas con la transmisión? Contacta soporte</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sección Inferior: Grid de Cards */}
        <div className="mt-12 pt-8 border-t border-slate-100 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-[#111111] flex items-center gap-2">
              <Video className="w-4 h-4 text-[#4fc1bd]" />
              Transmisiones y Videos Recientes
            </h3>
            <span className="text-xs text-slate-400 font-medium">Haz clic para reproducir arriba</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-52 bg-slate-100 rounded-2xl animate-pulse"></div>
                ))
              : recentVideos.map((video) => {
                  const videoId = video.id.videoId;
                  const isSelected = selectedVideoId === videoId;

                  return (
                    <button
                      key={videoId}
                      onClick={() => handleSelectVideo(video)}
                      className="group relative text-left bg-white rounded-2xl overflow-hidden border border-slate-200/80 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-[#4fc1bd]/40"
                    >
                      {/* Miniatura con transición sutil */}
                      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                        <img
                          src={video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url}
                          alt={video.snippet.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-in-out"
                        />
                        
                        {/* Overlay Oscuro Suave */}
                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-opacity duration-500 ease-in-out"></div>

                        {/* Botón Play Flotante */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-in-out bg-white/90 text-[#4fc1bd] group-hover:bg-[#4fc1bd] group-hover:text-white group-hover:scale-105">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Tag de 'Reproduciendo' */}
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 bg-[#4fc1bd] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-xs tracking-wider uppercase">
                            Reproduciendo
                          </div>
                        )}
                      </div>

                      {/* Información del Video */}
                      <div className="p-3.5 space-y-1.5 bg-white transition-colors duration-500 group-hover:bg-slate-50/40">
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-[#4fc1bd] transition-colors duration-300 leading-snug">
                          {video.snippet.title}
                        </h4>
                        <p className="text-[10px] font-medium text-slate-400">
                          {new Date(video.snippet.publishedAt).toLocaleDateString('es-MX', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </button>
                  );
                })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveStreams;