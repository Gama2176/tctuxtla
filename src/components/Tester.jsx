function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/95 text-slate-100 backdrop-blur-xl fixed top-0 left-0 z-50 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.9)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400" />
          <span className="text-xl font-black tracking-wide">DEV.APP</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a href="#inicio" className="transition hover:text-cyan-300">Inicio</a>
          <a href="#proyectos" className="transition hover:text-cyan-300">Proyectos</a>
          <a href="#servicios" className="transition hover:text-cyan-300">Servicios</a>
          <a href="#contacto" className="transition hover:text-cyan-300">Contacto</a>
        </div>

        <button className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-slate-800">
          Ingresar
        </button>
      </div>
    </nav>
  )
}

export default Navbar