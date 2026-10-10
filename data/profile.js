// Personal content: hero, about, links, skills, recognition.

export const profile = {
  name: "Divyakrishnan",
  role: "Full stack & DevOps engineer",
  focus: "Cloud, agentic AI and Web3",
  current: "Associate Engineer at Presidio, Chennai",
  intro:
    "Full stack and DevOps engineer working across cloud infrastructure, agentic AI and Web3.",
  bio: [
    "I build and automate workloads on AWS and Azure with Terraform, Kubernetes and CI/CD, develop LLM-powered agents with MCP, RAG and AWS Bedrock, and ship full stack apps and smart contracts.",
    "50+ hackathons in, I'm a fast learner with a strong eye for design and UX. I design and develop things for fun.",
  ],
  // From the original about page.
  outsideWork: [
    "Always fond of drawing, with a keen eye for detail.",
    "Passionate about gaming and game development.",
    "A creative thinker who writes stories and scripts.",
    "Happiest learning new things and building cool stuff.",
  ],
  email: "divyakrishnan.r74@gmail.com",
  resume: "/Resume.pdf",
  site: "https://www.divyakrishnan.com",
  portrait: "statue",
  // Frames David plays through once his bubble comes off (see Hero): frames
  // 3-16 of assets/images/statue_animation_frames, in order.
  portraitReactions: Array.from({ length: 14 }, (_, i) => `statue-react-${i + 3}`),
};

// `icon` is a react-icons/fa6 export name, used by the hero.
export const socials = [
  { label: "GitHub", href: "https://github.com/krishnan74/", icon: "FaGithub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyakrishnan-r/", icon: "FaLinkedin" },
  { label: "X (Twitter)", href: "https://twitter.com/Krishna29371748", icon: "FaXTwitter" },
];

// Logos for the stack marquee in the hero; `icon` is a react-icons/si export name.
export const marquee = [
  { label: "AWS", icon: "SiAmazonaws" },
  { label: "Azure", icon: "SiMicrosoftazure" },
  { label: "Terraform", icon: "SiTerraform" },
  { label: "Kubernetes", icon: "SiKubernetes" },
  { label: "Helm", icon: "SiHelm" },
  { label: "Docker", icon: "SiDocker" },
  { label: "Ansible", icon: "SiAnsible" },
  { label: "GitHub Actions", icon: "SiGithubactions" },
  { label: "GitLab CI", icon: "SiGitlab" },
  { label: "Datadog", icon: "SiDatadog" },
  { label: "Python", icon: "SiPython" },
  { label: "TypeScript", icon: "SiTypescript" },
  { label: "Next.js", icon: "SiNextdotjs" },
  { label: "React", icon: "SiReact" },
  { label: "Angular", icon: "SiAngular" },
  { label: ".NET", icon: "SiDotnet" },
  { label: "PostgreSQL", icon: "SiPostgresql" },
  { label: "Solidity", icon: "SiSolidity" },
  { label: "Chainlink", icon: "SiChainlink" },
];

export const skillGroups = [
  {
    title: "Cloud & infrastructure",
    items: [
      "AWS (EC2, ECS, EKS, Lambda, S3, VPC, IAM, Cognito, RDS, CloudFormation, CloudWatch)",
      "Azure",
      "Terraform",
      "Ansible",
      "Kubernetes",
      "Helm",
      "Docker",
    ],
  },
  {
    title: "DevOps & systems",
    items: ["GitHub Actions", "Jenkins", "GitLab CI", "JFrog", "Datadog", "Linux", "Bash", "Networking"],
  },
  {
    title: "Agentic AI",
    items: [
      "AWS Bedrock (AgentCore, Knowledge Bases)",
      "AWS DevOps Agent",
      "MCP servers",
      "RAG",
      "LangChain",
      "LiteLLM",
      "OpenWebUI",
      "Prompt engineering",
    ],
  },
  {
    title: "Full stack",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "ASP.NET Core",
      "Flask",
      "Django",
      "Flutter",
      "TailwindCSS",
      "REST",
      "GraphQL",
    ],
  },
  {
    title: "Languages & databases",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C#",
      "SQL",
      "Solidity",
      "Cairo",
      "Move",
      "Dart",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Foundry",
      "Hardhat",
      "Ethers.js",
      "Web3.js",
      "The Graph",
      "Chainlink",
      "ENS",
      "Starknet & Dojo",
      "Farcaster Frames",
    ],
  },
];

export const achievements = [
  "50+ hackathons with over $20,000 in prize money, a Mac mini (OpenClaw Hack) and $5,000 in Amazon credits.",
  "7 ETHGlobal hackathons: Agentic Ethereum (Covalent track winner), Taipei (Polygon track winner), Unite DeFi (1inch track, 5th), Tokyo (ENS track, 2nd), plus New Delhi, Open Agents and ETHOnline.",
  "4 Starknet hackathons, including 3rd place at Dojo Game Jam VIII.",
  "Spot Award, Presidio (Jul 2026) for delivering agentic AI POCs and customer demos.",
  "Best Project and Best Paper (2023) for “An Overview of Tangled” at SeedBrains, Cambridge Institute of Technology.",
  "President, FLAIR 2k24: led LICET's IT department symposium with 10 committees and 50+ volunteers.",
];

export const certifications = [
  { name: "AWS Certified AI Practitioner", detail: "Amazon Web Services, Jan 2026" },
  { name: "Ansible Enablement Program", detail: "Infrastructure automation and configuration management" },
  { name: "AI Enablement Program", detail: "AI tools and agentic workflows for engineering" },
];

export const education = [
  {
    name: "B.Tech, Information Technology",
    school: "Loyola ICAM College of Engineering and Technology (LICET)",
    period: "2021 – 2025",
    detail: "CGPA 8.4",
  },
  {
    name: "HSC",
    school: "Jaigopal Garodia Matric. Hr. Sec. School",
    period: "2019 – 2021",
    detail: "92%",
  },
];
