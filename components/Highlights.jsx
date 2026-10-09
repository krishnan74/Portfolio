import React from "react";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    items: "AWS (EC2, ECS, EKS, Lambda, S3, VPC, IAM, Cognito, RDS, CloudFormation, CloudWatch), Azure, Terraform, Ansible, Kubernetes, Helm, Docker",
  },
  {
    title: "DevOps & Systems",
    items: "GitHub Actions, Jenkins, GitLab CI, JFrog, Datadog, Linux, Bash, Networking",
  },
  {
    title: "Agentic AI",
    items: "AWS Bedrock (AgentCore, Knowledge Bases), AWS DevOps Agent, MCP servers, RAG, LangChain, LiteLLM, OpenWebUI, prompt engineering",
  },
  {
    title: "Full Stack",
    items: "React, Next.js, Angular, Node.js, Express, ASP.NET Core, Flask, Django, Flutter, TailwindCSS, REST, GraphQL",
  },
  {
    title: "Languages & Databases",
    items: "Python, TypeScript, JavaScript, Java, C#, SQL, Solidity, Cairo, Move, Dart · PostgreSQL, SQL Server, MySQL, MongoDB, Supabase, Prisma",
  },
  {
    title: "Blockchain",
    items: "Foundry, Hardhat, Ethers.js, Web3.js, The Graph, Chainlink, ENS, Starknet & Dojo, Farcaster Frames",
  },
];

const achievements = [
  "50+ hackathons with over $20,000 in prize money, a Mac mini (OpenClaw Hack) and $5,000 in Amazon credits.",
  "7 ETHGlobal hackathons: Agentic Ethereum (Covalent track winner), Taipei (Polygon track winner), Unite DeFi (1inch track, 5th), Tokyo (ENS track, 2nd), plus New Delhi, Open Agents and ETHOnline.",
  "4 Starknet hackathons, including 3rd place at Dojo Game Jam VIII.",
  "Spot Award, Presidio (Jul 2026) for delivering agentic AI POCs and customer demos.",
  "Best Project and Best Paper (2023) for \"An Overview of Tangled\" at SeedBrains, Cambridge Institute of Technology.",
  "President, FLAIR 2k24: led LICET's IT department symposium with 10 committees and 50+ volunteers.",
];

const certifications = [
  { name: "AWS Certified AI Practitioner", detail: "Amazon Web Services · Jan 2026" },
  { name: "Ansible Enablement Program", detail: "Infrastructure automation and configuration management" },
  { name: "AI Enablement Program", detail: "AI tools and agentic workflows for engineering" },
];

const education = [
  {
    name: "B.Tech, Information Technology",
    detail: "Loyola ICAM College of Engineering and Technology (LICET) · 2021 – 2025 · CGPA 8.4",
  },
  {
    name: "HSC",
    detail: "Jaigopal Garodia Matric. Hr. Sec. School · 2019 – 2021 · 92%",
  },
];

const Card = ({ title, children, accent }) => (
  <div className="border border-[#5e5e5e] rounded-[10px] bg-[#1f1f1f] p-6 md:p-8 h-full">
    <p className={`text-2xl mb-4 ${space_grotesk.className}`}>
      <span
        className={`w-[12px] h-[12px] inline-block border-2 border-solid rounded-full mr-3 ${accent}`}
      ></span>
      {title}
    </p>
    {children}
  </div>
);

const Highlights = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl px-5 text-white">
      <Card title="Skills" accent="bg-red-500 border-red-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className={`text-lg text-[#BAA5FF] ${space_grotesk.className}`}>
                {group.title}
              </p>
              <p className="text-lg text-gray-200">{group.items}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Achievements" accent="bg-yellow-500 border-yellow-600">
        <ul className="flex flex-col gap-2 list-disc pl-5">
          {achievements.map((item, i) => (
            <li key={i} className="text-lg text-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Certifications" accent="bg-green-500 border-green-600">
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className={`text-lg ${space_grotesk.className}`}>{cert.name}</p>
                <p className="text-base text-gray-400">{cert.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Education" accent="bg-[#636fdb] border-[#4f59b8]">
          <div className="flex flex-col gap-3">
            {education.map((edu) => (
              <div key={edu.name}>
                <p className={`text-lg ${space_grotesk.className}`}>{edu.name}</p>
                <p className="text-base text-gray-400">{edu.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Highlights;
