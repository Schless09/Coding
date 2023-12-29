"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Email, Sms } from "@mui/icons-material";

const CurrentOpenings = () => {
  const [jobOpenings, setJobOpenings] = useState([
    {
      title: "Senior Accountant",
      description:
        "Join our finance team and manage financial reporting and analysis.",
      location: "San Francisco, CA",
      jobId: "senior-accountant",
    },
    {
      title: "Financial Analyst",
      description:
        "Assist in financial planning and analysis for our organization.",
      location: "New York, NY",
      jobId: "financial-analyst",
    },
    {
      title: "Financial Analyst II",
      description:
        "Assist in financial planning and analysis for our organization.",
      location: "New York, NY",
      jobId: "financial-analyst",
    },
    {
      title: "Tax Consultant",
      description: "Provide tax planning and advisory services to our clients.",
      location: "Chicago, IL",
      jobId: "tax-consultant",
    },
    {
      title: "Audit Manager",
      description: "Lead and oversee financial audits for our clients.",
      location: "Los Angeles, CA",
      jobId: "audit-manager",
    },
    {
      title: "Junior Accountant",
      description: "Support the finance team in daily accounting tasks.",
      location: "Houston, TX",
      jobId: "junior-accountant",
    },
    {
      title: "Financial Planning Manager",
      description: "Manage and oversee financial planning activities.",
      location: "Denver, CO",
      jobId: "financial-planning-manager",
    },
  ]);

  const addJob = (newJob: {
    title: string;
    description: string;
    location: string;
    jobId: string;
  }) => {
    setJobOpenings([...jobOpenings, newJob]);
  };

  const shareViaEmail = (jobTitle: string) => {
    console.log(`Sharing ${jobTitle} via email`);
  };

  const shareViaText = (jobTitle: string) => {
    console.log(`Sharing ${jobTitle} via text`);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Current Openings</h1>
      </div>

      {jobOpenings.map((job, index) => (
        <div
          key={index}
          className="relative bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg mb-4"
        >
          <h2 className="text-lg text-green-500 font-semibold mb-2">
            {job.title}
          </h2>
          <p className="text-gray-600 mb-4">{job.description}</p>
          <p className="text-gray-600 mb-2">
            {job.location.split(", ").join(", ")}
          </p>

          <Link href={`/job/${job.jobId}`} passHref>
            <div className="text-green-500 hover:underline">Learn More</div>
          </Link>

          <div className="absolute bottom-4 right-4 flex items-center space-x-4">
            <Email
              className="text-gray-500 cursor-pointer"
              onClick={() => shareViaEmail(job.title)}
            />
            <Sms
              className="text-gray-500 cursor-pointer"
              onClick={() => shareViaText(job.title)}
            />
          </div>
        </div>
      ))}

       </div>
  );
};

export default CurrentOpenings;
