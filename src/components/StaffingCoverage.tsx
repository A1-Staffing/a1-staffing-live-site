import React from 'react';

const StaffingCoverage: React.FC = () => {
  return (
    <section className="bg-[#011657] py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">
          A1 Staffing Coverage
        </h2>

        {/* Grid with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* First Column */}
          <div className="flex flex-col space-y-2">
            <p className="text-2xl font-bold text-red-500">New Jersey (NJ):</p>
            <p className="text-2xl">Asbury Park</p>
            <p className="text-2xl">Bound Brook</p>
            <p className="text-2xl">Bridgewater</p>
            <p className="text-2xl">Clifton</p>
            <p className="text-2xl">Dover</p>
            <p className="text-2xl">East Brunswick</p>
            <p className="text-2xl">Edison</p>
            <p className="text-2xl">Elizabeth</p>
            <p className="text-2xl">Fairfield</p>
            <p className="text-2xl">Freehold</p>
            <p className="text-2xl">Hamilton</p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col space-y-2">
            <p className="text-2xl">Hasbrouck Heights</p>
            <p className="text-2xl">Highland Park</p>
            <p className="text-2xl">Hightstown</p>
            <p className="text-2xl">Jersey City</p>
            <p className="text-2xl">Lawrenceville</p>
            <p className="text-2xl">Manhattan</p>
            <p className="text-2xl">Marlton</p>
            <p className="text-2xl">Morris Plains</p>
            <p className="text-2xl">Morristown</p>
            <p className="text-2xl">New Brunswick</p>
            <p className="text-2xl">New York</p>
            <p className="text-2xl">Newark</p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col space-y-2">
            <p className="text-2xl">North Brunswick</p>
            <p className="text-2xl">Paramus</p>
            <p className="text-2xl">Paterson</p>
            <p className="text-2xl">Perth Amboy</p>
            <p className="text-2xl">Plainfield</p>
            <p className="text-2xl">Princeton</p>
            <p className="text-2xl">Queens</p>
            <p className="text-2xl">Scotch Plains</p>
            <p className="text-2xl">Secaucus</p>
            <p className="text-2xl">Toms River</p>
            <p className="text-2xl">Trenton</p>
            <p className="text-2xl">Union</p>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl">Union City</p>
            <p className="text-2xl">Watchung</p>
            <p className="text-2xl font-bold text-red-500">New York (NY):</p>
            <p className="text-2xl">Brooklyn</p>
            <p className="text-2xl">Manhattan</p>
            <p className="text-2xl">New York</p>
            <p className="text-2xl">West New York</p>
            <p className="text-2xl font-bold text-red-500">Pennsylvania (PA):</p>
            <p className="text-2xl">Pennsylvania</p>
            <p className="text-2xl font-bold text-red-500">Connecticut (CT):</p>
            <p className="text-2xl">Connecticut</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffingCoverage;
 