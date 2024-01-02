
'use client';
import Link from "next/link";
import * as React from "react";

const Referrals = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl mb-4 font-bold text-gray-900">Referrals</h1>

      <p className="mb-8 text-gray-700">
        Help us expand our network by providing referrals. Fill out the form
        below with your candidate&apos;s details.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* ... rest of the form ... */}
      </form>

      <div className="flex md:mt-4 mt-6">
        <Link
          href="/dashboard"
          className="text-green-500 font-semibold inline-flex items-center transition hover:text-green-600"
        >
          Track Referrals
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Referrals;
