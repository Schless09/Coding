import Link from "next/link";
import * as React from "react";

const JoinUs = () => {
  // Constants for reward amounts
  const FIRST_REFERRAL_REWARD = `5,000`;
  const SECOND_REFERRAL_REWARD = `10,000`;
  const THIRD_REFERRAL_REWARD = `15,000`;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          We believe that the best Accountants come from within our network
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base text-gray-800">
            That&apos;s why we&apos;ve crafted a referral program that truly motivates
            introductions. When you refer a candidate to us and they secure a
            position through our assistance, you earn substantial rewards.
            Your first successful referral earns you ${FIRST_REFERRAL_REWARD}.
            If your second referral hits the mark, you&apos;ll receive $
            {SECOND_REFERRAL_REWARD}. And the third? An impressive $
            {THIRD_REFERRAL_REWARD} reward awaits you.
            <br />
            <br />
            But our appreciation for connections doesn&apos;t stop there. We value
            your insights into the industry. If you introduce us to a company
            that&apos;s actively seeking accounting talent and they become a client,
            you&apos;ll receive the same referral payments. It&apos;s our way of
            recognizing the power of your network and the impact you make on
            both sides of the hiring equation.
          </p>
          <div className="flex md:mt-4 mt-6">

            <Link
              href="/dashboard"
              className="text-green-400 font-semibold inline-flex items-center transition hover:text-green-300"
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
      </div>
    </section>
  );
};

export default JoinUs;


