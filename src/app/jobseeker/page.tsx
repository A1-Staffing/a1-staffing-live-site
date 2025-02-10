import BackToTop from '@/components/BackToTop'
import Copyright from '@/components/CopyRight'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JobSeekersForm from '@/components/JobSeekersForm'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-[#00094a]">
        <JobSeekersForm />
      </div>
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  );
}

export default page
