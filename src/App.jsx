import React, { useEffect, useState } from 'react'
import './index.css'
import { Skeleton } from 'boneyard-js/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import CoursesAndModalities from './components/CoursesAndModalities'
import Methodology from './components/Methodology'
import ProgramsSection from './components/ProgramsSection'
import ContactSection from './components/ContactSection'
import WhereWeAreSection from './components/WhereWeAreSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Inscription from './components/Inscription'
import WhatsAppButton from './components/WhatsAppButton'

// Import de los artículos de idiomas
import EnglishProgramArticle from './components/EnglishProgramArticle'
import FrenchProgramArticle from './components/FrenchProgramArticle'
import ItalianProgramArticle from './components/ItalianProgramArticle'
import OnlineModeArticle from './components/OnlineModeArticle'
import PresencialModeArticle from './components/PresencialModeArticle'
import AcademicAdvisingArticle from './components/AcademicAdvisingArticle'
import EuroSelfArticle from './components/EuroSelfArticle'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigate = (view) => {
    if (view === currentView) return
    setCurrentView(view)
    if (isMobile) setIsLoading(true)
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
              <Hero />
            </Skeleton>
            <Skeleton name="about-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <AboutUs />
            </Skeleton>
            <Skeleton name="methodology-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Methodology />
            </Skeleton>
            <Skeleton name="courses-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <CoursesAndModalities onNavigateCourse={(courseId) => handleNavigate(courseId)} />
            </Skeleton>
            
            {/* CORRECCIÓN AQUÍ: Se añade onNavigateCourse en ProgramsSection */}
            <Skeleton name="programs-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <ProgramsSection onNavigateCourse={(courseId) => handleNavigate(courseId)} />
            </Skeleton>
            
            <Skeleton name="contact-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <ContactSection />
            </Skeleton>
            <Skeleton name="where-we-are-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <WhereWeAreSection />
            </Skeleton>
            <Skeleton name="faq-section" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <FAQSection />
            </Skeleton>
          </>
        )}

        {currentView === 'english' && (
          <div className="pt-20">
            <Skeleton name="english-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <EnglishProgramArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'french' && (
          <div className="pt-20">
            <Skeleton name="french-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <FrenchProgramArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'italian' && (
          <div className="pt-20">
            <Skeleton name="italian-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <ItalianProgramArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'online' && (
          <div className="pt-20">
            <Skeleton name="online-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <OnlineModeArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'presencial' && (
          <div className="pt-20">
            <Skeleton name="presencial-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <PresencialModeArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'asesoria' && (
          <div className="pt-[#80px]">
            <Skeleton name="academic-advising-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <AcademicAdvisingArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {/* Vista EuroSelf */}
        {currentView === 'euroself' && (
          <div className="pt-20">
            <Skeleton name="euroself-article-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <EuroSelfArticle onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}

        {currentView === 'inscription' && (
          <div className="pt-20">
            <Skeleton name="inscription-page" loading={isMobile && isLoading} fallback={skeletonFallback}>
              <Inscription onGoBack={() => handleNavigate('home')} />
            </Skeleton>
          </div>
        )}
      </main>

      <WhatsAppButton />
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}