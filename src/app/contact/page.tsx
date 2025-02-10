import BackToTop from '@/components/BackToTop'
import ContactUs from '@/components/ContactUs'
import Copyright from '@/components/CopyRight'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
       <div className="pt-20 bg-[#00094a]">
      <ContactUs />
      </div>
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  )
}

export default page
