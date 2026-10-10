import {
  SiAmazonaws,
  SiAmazoneks,
  SiAngular,
  SiAwsamplify,
  SiCsharp,
  SiDatadog,
  SiDotnet,
  SiGitlab,
  SiHelm,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRazorpay,
  SiTerraform,
} from "react-icons/si";
import { BedrockIcon, McpIcon, OpenWebUiIcon } from "./icons/BrandIcons";

// Logo for each technology named in data/experience.js; anything not listed
// here or in `marks` shows as its name alone.
const icons = {
  AWS: SiAmazonaws,
  "AWS Amplify": SiAwsamplify,
  "AWS DevOps Agent": SiAmazonaws,
  Bedrock: BedrockIcon,
  "Bedrock AgentCore": BedrockIcon,
  "Bedrock Knowledge Bases": BedrockIcon,
  EKS: SiAmazoneks,
  Azure: SiMicrosoftazure,
  Terraform: SiTerraform,
  Helm: SiHelm,
  MCP: McpIcon,
  "Open WebUI": OpenWebUiIcon,
  GitLab: SiGitlab,
  Datadog: SiDatadog,
  ".NET": SiDotnet,
  "ASP.NET Core": SiDotnet,
  "C#": SiCsharp,
  Angular: SiAngular,
  "SQL Server": SiMicrosoftsqlserver,
  PostgreSQL: SiPostgresql,
  Razorpay: SiRazorpay,
  "Next.js": SiNextdotjs,
  Prisma: SiPrisma,
};

// Marks cut from logo files by scripts/optimize-images.mjs (`techMarks`),
// drawn as a mask in the text color so they match the icons above.
const marks = {
  LiteLLM: "mark-litellm",
  ModelizeIT: "mark-modelizeit",
  "OpenWeaver Studio": "mark-openweaver-studio",
};

export default function TechList({ items, className = "" }) {
  return (
    <ul aria-label="Technologies" className={`tech-list ${className}`}>
      {items.map((name) => {
        const Icon = icons[name];
        const mark = marks[name];
        return (
          <li key={name} className="tech-item">
            {Icon && <Icon aria-hidden="true" className="tech-icon" />}
            {mark && (
              <span
                aria-hidden="true"
                className="tech-icon tech-mark"
                style={{ "--mark": `url(/images/opt/${mark}.png)` }}
              />
            )}
            {name}
          </li>
        );
      })}
    </ul>
  );
}
