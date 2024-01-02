
import * as React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white body-font rounded-xl p-8">
      <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-4xl mb-4 font-bold text-green-400">
            Empowering Accountants to Boost Their Income by $15-30k this Year
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300 text-xl">
            At Chart of Accountants, we&apos;re changing the game by harnessing
            personal referrals and vast networks to drive placements. Join our
            referral network to quickly turn your professional and personal
            connections into significant earnings.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/IntroClient">
              <span className="bg-green-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg font-semibold">
                Introduce a Client
              </span>
            </Link>
            <Link href="/referrals">
              <span className="bg-gray-200 text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-lg text-lg font-semibold ml-4">
                Refer Candidate
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
