import React, { useEffect, useState } from 'react'
import './index.css'
import { Skeleton } from 'boneyard-js/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Pastores from './components/Pastores'
import Ministerios from './components/Ministerios'
import Creemos from './components/Creemos'
import DondeEstamos from './components/DondeEstamos'
import ContactSection from './components/ContactSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LiveStreams from './components/LiveStreams'
import WhatsAppButton from './components/WhatsAppButton'

// Import de los artículos de idiomas
import RutaTCTArticle from './components/RutaTCTArticle'
import TCTJovenesArticle from './components/TCTJovenesArticle'
import TCTKidsArticle from './components/TCTKidsArticle'
import BautizosArticle from './components/BautizosArticle'
import DonacionesArticle from './components/DonacionesArticle'
import PastoresJuvenilesArticle from './components/PastoresJuvenilesArticle'
import GermanPastorArticle from './components/GermanPastorArticle'
import ArelyCoyocArticle from './components/ArelyCoyocArticle'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [scrollTarget, setScrollTarget] = useState(null)

  const handleNavigate = (view, targetSection = null) => {
    // Si la vista eliminada 'misiones-mni' es solicitada, redirigirla
    // a la página principal y posicionarse en la sección de ministerios.
    if (view === 'misiones-mni') {
      view = 'home'
      targetSection = '#ministerios'
    }

    if (view !== currentView) setCurrentView(view)
    if (isMobile) setIsLoading(true)
    setScrollTarget(targetSection)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => window.removeEventListener('resize', updateMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timeout)
  }, [currentView, isMobile])

  useEffect(() => {
    if (currentView !== 'home' || !scrollTarget) return

    const targetId = scrollTarget.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setScrollTarget(null)
  }, [currentView, scrollTarget])

  const skeletonFallback = (
    <div className="min-h-screen bg-white p-6">
      <div className="mb-6 h-14 rounded-3xl bg-slate-200 animate-pulse" />
      <div className="space-y-6">
        <div className="h-72 rounded-[32px] bg-slate-200 animate-pulse" />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-72 rounded-2xl bg-slate-200 animate-pulse" />
          <div className="h-72 rounded-2xl bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* Navbar presente en toda la aplicación */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main>
        {currentView === 'home' && (
          <>
            <Skeleton name="hero-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Hero onNavigate={handleNavigate} />
            </Skeleton>
            <Skeleton name="about-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Nosotros />
            </Skeleton>
            <Skeleton name="methodology-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Creemos />
            </Skeleton>
            
            {/* Pastores antes de Ministerios */}
            <Skeleton name="programs-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Pastores onNavigateCourse={(courseId) => handleNavigate(courseId)} />
            </Skeleton>
            
            <Skeleton name="courses-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Ministerios onNavigateCourse={(courseId) => handleNavigate(courseId)} />
            </Skeleton>
              <Skeleton name="where-we-are-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
            <DondeEstamos />
            </Skeleton>
            <Skeleton name="contact-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <ContactSection />
            </Skeleton>

            <Skeleton name="faq-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <FAQ />
            </Skeleton>
          </>
        )}

        {currentView === 'ruta-tct' && (
          <div className="pt-20">
            <Skeleton name="ruta-tct-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <RutaTCTArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'tct-jovenes' && (
          <div className="pt-20">
            <Skeleton name="tct-jovenes-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <TCTJovenesArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'tct-kids' && (
          <div className="pt-20">
            <Skeleton name="tct-kids-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <TCTKidsArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'bautizos' && (
          <div className="pt-20">
            <Skeleton name="bautizos-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <BautizosArticle onGoBack={() => handleNavigate('home', '#ministerios')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'donaciones' && (
          <div className="pt-20">
            <Skeleton name="donaciones-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <DonacionesArticle onGoBack={() => handleNavigate('home', '#ministerios')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'pastores-juveniles' && (
          <div className="pt-20">
            <Skeleton name="pastores-juveniles-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <PastoresJuvenilesArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'german-pastor' && (
          <div className="pt-20">
            <Skeleton name="german-pastor-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <GermanPastorArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'arely-coyoc' && (
          <div className="pt-20">
            <Skeleton name="arely-coyoc-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <ArelyCoyocArticle onGoBack={() => handleNavigate('home', '#pastores')} />
            </Skeleton>
          </div>
        )}

        {/* Vista Pastores Juveniles */}

        {currentView === 'transmisiones' && (
          <div className="pt-20">
            <Skeleton name="inscription-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <LiveStreams onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}
      </main>

      <WhatsAppButton />
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}