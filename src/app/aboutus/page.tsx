import AboutUs from '@/components/AboutUs'
import BackToTop from '@/components/BackToTop'
import Copyright from '@/components/CopyRight'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-[#00094a]">
        <AboutUs />
      </div>
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  );
}

export default page
