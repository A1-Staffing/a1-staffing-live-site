import Link from "next/link";
import React from "react";

const Copyright: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      <Link href="https://a1staffingpro.com/" target="_blank" rel="noopener noreferrer">
        &copy; 2025 A1 Staffing All Rights Reserved.
      </Link>
    </footer>
  );
};

export default Copyright;

