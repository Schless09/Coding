import * as React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white body-font p-4">
      <div className="container mx-auto flex flex-col items-center sm:flex-row">
        <Link href="/" passHref>
          <div className="flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-green-400 p-2 bg-white rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-medium">
              Chart Of Accountants
            </span>
          </div>
        </Link>

        <p className="mt-4 text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0">
          © 2023 - All Rights Reserved
        </p>

        <div className="flex-grow"></div>

        <Link href="/referrals">
          <span className="text-white border-0 py-2 px-4 focus:outline-none hover:text-green-400 rounded text-lg ml-auto">
            Track Referrals
          </span>
        </Link>

        <div className="flex mt-4 space-x-4 sm:ml-auto sm:mt-0">
          <Link
            href="https://www.linkedin.com/company/chart-of-accountants"
            className="text-gray-400"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
          {/* Add more social media icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
