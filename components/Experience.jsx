import React from "react";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const experience = [
  {
    company: "Presidio",
    role: "Associate Engineer",
    period: "Oct 2025 – Present",
    location: "Chennai, Tamil Nadu",
    highlights: [
      {
        title: "FinOps AI agent for cloud architecture review",
        period: "Jun 2026 – Present",
        text: "AI agent for an enterprise client that reviews proposed cloud architectures before provisioning, estimating AWS costs and checking designs against governance standards. Built and deployed an OpenWebUI + LiteLLM gateway on EKS with Bedrock, MCP servers for AWS pricing and internal knowledge, and Terraform/Helm deployments aligned to the client's CI.",
      },
      {
        title: "Azure assessment and pilot migration",
        period: "Apr 2026 – Present",
        text: "Mapped applications and affinity groups across the Americas and EMEA with ModelizeIT, contributed to a 1,600+ server master inventory grouped into migration waves, and took part in the pilot migration to Azure (Waves 1 to 6).",
      },
      {
        title: "Agentic AI proofs of concept and pre-sales",
        period: "Feb – Jul 2026",
        text: "Built about five AI agent POCs on AWS Bedrock AgentCore (DevOps, Terraform IaC, GitLab and EKS operations agents) backed by secured MCP servers and RAG with Bedrock Knowledge Bases. The demos helped win two customer engagements.",
      },
      {
        title: "Cloud discovery, observability and knowledge sharing",
        period: "Jan 2026 – Present",
        text: "Delivered ModelizeIT demos for three international clients, built an EKS fleet observability POC with Quick Suite and Datadog, created an onboarding curriculum, and gave a technical talk on the AWS DevOps Agent.",
      },
    ],
    stack: ["AWS", "Bedrock", "EKS", "Terraform", "Helm", "MCP", "Azure"],
  },
  {
    company: "Presidio",
    role: "Intern",
    period: "Apr 2025 – Oct 2025",
    location: "Chennai, Tamil Nadu",
    summary:
      "Six-month training program in full stack development and DevOps: SQL Server and PostgreSQL, C# and ASP.NET Core APIs, Angular, design patterns and unit testing, with Razorpay and Azure Blob Storage integrations. Also learned AWS, Azure, Bash scripting and networking.",
    stack: [".NET", "Angular", "SQL Server", "PostgreSQL", "Azure"],
  },
  {
    company: "Crafted With Love",
    role: "Software Developer Intern",
    period: "Aug 2024 – Oct 2024",
    location: "Remote",
    summary:
      "Revamped the AlienWardrobe eCommerce fashion platform with Next.js for better performance and UX. Managed the database and CI/CD on AWS Amplify, and built API routes and Prisma schemas.",
    stack: ["Next.js", "Prisma", "AWS Amplify"],
  },
  {
    company: "OpenWeaver",
    role: "Studio Developer Intern",
    period: "Feb 2024 – Mar 2024",
    location: "Chennai",
    summary:
      "Built customized client websites on the low-code OpenWeaver Studio, gathering requirements directly from clients.",
    stack: ["OpenWeaver Studio"],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl px-5 text-white">
      {experience.map((job, index) => (
        <div
          key={index}
          className="relative border border-[#5e5e5e] rounded-[10px] bg-[#1f1f1f] p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
            <p className={`text-2xl md:text-3xl ${space_grotesk.className}`}>
              {job.role}{" "}
              <span className="text-[#BAA5FF]">@ {job.company}</span>
            </p>
            <p className="text-lg text-gray-400 whitespace-nowrap">
              {job.period} · {job.location}
            </p>
          </div>

          {job.summary && (
            <p className="text-lg mt-4 text-gray-200">{job.summary}</p>
          )}

          {job.highlights && (
            <div className="flex flex-col gap-5 mt-5">
              {job.highlights.map((item, i) => (
                <div key={i} className="border-l-2 border-[#636fdb] pl-4">
                  <p className={`text-lg ${space_grotesk.className}`}>
                    {item.title}{" "}
                    <span className="text-gray-400 font-normal text-base">
                      ({item.period})
                    </span>
                  </p>
                  <p className="text-lg text-gray-200 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-5">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="text-base px-3 py-1 border border-[#5e5e5e] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
