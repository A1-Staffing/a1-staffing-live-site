import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/footer5-bg.png')" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-8">
          {/* Logo and Description */}
          <div className="flex flex-col w-full md:w-1/4">
            <Image
              src="/logo-white.png"
              alt="A1 Staffing Pro LLC Logo"
              width={160}
              height={40} // Match the natural aspect ratio
              style={{ width: "auto", height: "auto" }} // Ensure aspect ratio is maintained
              className="object-contain"
            />
            <p className="mt-4 text-white text-sm">
              A staffing firm tailored to meet the demands of today&apos;s job
              market. Whether you&apos;re looking to hire top talent or land
              your next career opportunity, A1 Staffing Pro LLC serves as your
              bridge to success.
            </p>
            <div className="flex mt-4 space-x-4">
      <Link href="https://www.facebook.com/people/A1-Staffing-Pro-LLC/100084799082964/" target="_blank">
        <i className="fab fa-facebook w-12 h-12 text-blue-600"></i>
      </Link>
      <Link href="https://x.com/a1staffingpro?mx=2" target="_blank">
        <i className="fab fa-x-twitter w-12 h-12 text-blue-500"></i>
      </Link>
      <Link href="https://g.co/kgs/MG8Fg6a" target="_blank">
        <i className="fas fa-google w-12 h-12 text-red-600"></i>
      </Link>
    </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col w-full md:w-1/4">
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aboutus"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/employer"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Employers
                </Link>
              </li>
              <li>
                <Link
                  href="/jobseeker"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Job Seekers
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col w-full md:w-1/4">
            <h3 className="font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-orange-500 transform transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col w-full md:w-1/4">
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <div className="text-white">
              <p className="flex items-center space-x-2">
                <i className="fas fa-phone w-6 h-6"></i> {/* Phone Icon */}
                <a href="tel:8889733410" className="hover:text-red-500">
                  888 973 3410
                </a>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <i className="fas fa-phone w-6 h-6"></i> {/* Phone Icon */}
                <a href="tel:8622466032" className="hover:text-red-500">
                  862 246 6032
                </a>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <i className="fas fa-envelope w-6 h-6"></i> {/* Email Icon */}
                <a
                  href="mailto:info@a1staffingpro.com"
                  className="hover:text-red-500"
                >
                  info@a1staffingpro.com
                </a>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <i className="fas fa-map-marker-alt w-6 h-6"></i>{" "}
                {/* Location Icon */}
                <span>New Jersey, USA</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <i className="fas fa-fax w-6 h-6"></i> {/* Fax Icon */}
                <a href="tel:8622631905" className="hover:text-red-500">
                  862 263-1905
                </a>{" "}
                {/* Fax number */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
