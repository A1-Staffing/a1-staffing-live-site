import BackToTop from '@/components/BackToTop'
import Copyright from '@/components/CopyRight'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StaffingCoverage from '@/components/StaffingCoverage'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-[#00094a]">
        <StaffingCoverage />
      </div>
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  );
}

export default page
