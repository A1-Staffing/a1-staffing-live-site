import BackToTop from '@/components/BackToTop'
import BlogSection from '@/components/BlogSection'
import Copyright from '@/components/CopyRight'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-[#00094a]">
        <BlogSection />
      </div>
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  );
}

export default page
