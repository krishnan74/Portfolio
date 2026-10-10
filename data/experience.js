// `logo` is the base name of a company logo in public/images/opt (light and
// "-dark" versions; see `logos` in scripts/optimize-images.mjs); `logoScale`
// enlarges one that reads small. `url` is the company's LinkedIn page.
// `summaryLink` links the first occurrence of its text in the summary.
export const experience = [
  {
    company: "Presidio",
    logo: "logo-presidio",
    url: "https://www.linkedin.com/company/presidio-/home/",
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
    logo: "logo-presidio",
    url: "https://www.linkedin.com/company/presidio-/home/",
    role: "Intern",
    period: "Apr 2025 – Oct 2025",
    location: "Chennai, Tamil Nadu",
    summary:
      "Six-month training program in full stack development and DevOps: SQL Server and PostgreSQL, C# and ASP.NET Core APIs, Angular, design patterns and unit testing, with Razorpay and Azure Blob Storage integrations. Also learned AWS, Azure, Bash scripting and networking.",
    stack: [".NET", "Angular", "SQL Server", "PostgreSQL", "Azure"],
  },
  {
    company: "Crafted With Love",
    logo: "logo-crafted-with-love",
    logoScale: 1.35, // thin linework; at the shared size it blurs
    url: "https://www.linkedin.com/company/craftedwithlove/home/",
    role: "Software Developer Intern",
    period: "Aug 2024 – Oct 2024",
    location: "Remote",
    summary:
      "Contributed to the development and enhancement of AlienWardrobe, the company's eCommerce fashion platform. Revamped the site with Next.js, improving its performance and user experience. Built API routes and configured the database schemas with Prisma to make data management more efficient, and handled database management and deployments, including CI/CD, on AWS Amplify.",
    summaryLink: { text: "AlienWardrobe", href: "https://www.alienwardrobe.com/" },
    stack: ["Next.js", "Prisma", "AWS Amplify"],
  },
  {
    company: "OpenWeaver",
    logo: "logo-openweaver",
    url: "https://www.linkedin.com/company/openweaver/home/",
    role: "Studio Developer Intern",
    period: "Feb 2024 – Mar 2024",
    location: "Chennai",
    summary:
      "Designed and built customized websites for 10+ clients on OpenWeaver Studio, a low-code platform. Worked directly with each client to gather requirements and shaped every site around their specific needs, then delivered client-focused websites that met their goals and saw each project through to a successful finish.",
    stack: ["OpenWeaver Studio"],
  },
];
