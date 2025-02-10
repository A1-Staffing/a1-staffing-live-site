import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Form from '@/components/EmployerForm';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JobSeekersForm from '@/components/JobSeekersForm';
import ServiceSection from '@/components/ServiceSection';
import StaffingCoverage from '@/components/StaffingCoverage';
import TypeOfJob from '@/components/TypeOfJob';
import BlogSection from '@/components/BlogSection';
import Copyright from '@/components/CopyRight';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <TypeOfJob />
      <ContactUs />
      <Form />
      <JobSeekersForm />
      <BlogSection />
      <StaffingCoverage />
      <Footer />
      <BackToTop />
      <Copyright />
    </>
  );
}
