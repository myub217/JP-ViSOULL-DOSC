// src/Layout/Layout.tsx
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@common/Navbar'
import Footer from '@components/Footer/Footer'
import ChatWidget from '@common/ChatWidget'
import BackToTop from '@common/BackToTop'
import ScrollToTop from '@common/ScrollToTop'
import ScrollProgress from '@common/ScrollProgress'
import ErrorBoundary from '@common/ErrorBoundary'
import FallbackLoading from '@common/FallbackLoading'

const Layout = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="relative min-h-screen pt-20">
        <Suspense fallback={<FallbackLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </ErrorBoundary>
  )
}

export default Layout