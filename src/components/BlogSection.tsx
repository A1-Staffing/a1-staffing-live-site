import Image from 'next/image';
import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="bg-[#021152] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <button className="bg-[#374151] text-white py-2 px-4 rounded mb-4">
            Our Blog & News
          </button>
          <h2 className="text-4xl font-bold mb-4">
            Flash Your Source for Industry Updates
          </h2>
          <p className="text-lg text-[#D1D5DB]">
            Whether you&apos;re looking to navigate your career path or enhance
            your organization&apos;s hiring practices, <br />
            our blog is your go-to destination for valuable insights
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#192b65] rounded-lg shadow-lg overflow-hidden card-img">
            <div className="relative overflow-hidden group">
              <Image
                src="/blog1.jpg"
                alt="Career Compass"
                width={500} // Specify the width
                height={300} // Specify the height
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent skew-y-12 opacity-0 group-hover:opacity-100 animate-shine"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-[#9CA3AF] mb-4">
                <span className="mr-4">📅 16 August 2023</span>
                <span>👤 Ben Stokes</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Career Compass: Navigating Your Professional Path
              </h3>
              <p className="text-sm text-[#D1D5DB] mb-4">
                Our blog covers a wide range of topics, from tips for optimizing
                your hiring process
              </p>
              <a href="#" className="text-[#3B82F6] font-semibold">
                Read More &rarr;
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#192b65] rounded-lg shadow-lg overflow-hidden card-img">
            <div className="relative overflow-hidden group">
              <Image
                src="/blog4.jpg"
                alt="Career Compass"
                width={500} // Specify the width
                height={300} // Specify the height
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent skew-y-12 opacity-0 group-hover:opacity-100 animate-shine"></div>
            </div>

            <div className="p-6">
              <div className="flex items-center text-sm text-[#9CA3AF] mb-4">
                <span className="mr-4">📅 16 August 2023</span>
                <span>👤 Ben Stokes</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Talent Chronicles: Stories from the Hiring Frontline
              </h3>
              <p className="text-sm text-[#D1D5DB] mb-4">
                Whether you&apos;re a hiring manager looking to stay ahead of
                industry trends or a candidate
              </p>
              <a href="#" className="text-[#3B82F6] font-semibold">
                Read More &rarr;
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#192b65] rounded-lg shadow-lg overflow-hidden card-img">
            <div className="relative overflow-hidden group">
              <Image
                src="/blog5.jpg"
                alt="Career Compass"
                width={500} // Specify the width
                height={300} // Specify the height
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent skew-y-12 opacity-0 group-hover:opacity-100 animate-shine"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-[#9CA3AF] mb-4">
                <span className="mr-4">📅 16 August 2023</span>
                <span>👤 Ben Stokes</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Recruitology: Where Recruitment Meets Technology
              </h3>
              <p className="text-sm text-[#D1D5DB] mb-4">
                Stay tuned for regular updates and valuable insights from our
                team of staffing experts.
              </p>
              <a href="#" className="text-[#3B82F6] font-semibold">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
