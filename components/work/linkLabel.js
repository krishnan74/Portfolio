// Names a project link by where it goes, so visitors know what they'll open.
export function linkLabel(url) {
  if (!url) return null;
  if (url.includes("github.com")) return "Source on GitHub";
  if (url.includes("devfolio.co")) return "Devfolio page";
  if (url.includes("ethglobal.com")) return "ETHGlobal showcase";
  if (url.includes("devpost.com")) return "Devpost page";
  return "Live site";
}
