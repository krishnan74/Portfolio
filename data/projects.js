// Single source of truth for projects, used by the home page and /work.
// /work groups them: `client: true` projects are in production for real
// users; a placed `award` (gold, silver, bronze) puts a project under
// "Hackathon wins", newest first by `date` (ISO, as precise as known); the
// rest go in the expandable index. Other groups keep this order.
// `recognition` is the award or event line (`recognitionUrl` links it to
// the event page) and `award` its medal: "gold" (1st place, a track win or
// best project), "silver" (2nd), "bronze" (any other placing) or
// "participation" (built at the event). `images` are base names of
// optimized files in public/images/opt (see scripts/optimize-images.mjs).

export const projects = [
  {
    slug: "fleet-iq",
    name: "Fleet IQ",
    client: true,
    description:
      "Co-founded and led tech as CTO: a SaaS product for transport service management covering fleet operations, tracking and maintenance.",
    stack: ["Next JS", "MongoDB", "TailwindCSS"],
    url: "https://fleet-iq.vercel.app/",
  },
  {
    slug: "chennai-connects",
    name: "Chennai Connects",
    client: true,
    description: "A promotional website for an event management firm.",
    stack: ["ReactJS", "TailwindCSS", "MongoDB"],
    url: "https://www.chennaiconnects.in/",
    images: ["chennai-connects"],
  },
  {
    slug: "squidchain",
    name: "SquidChain",
    date: "2025-03",
    description:
      "A Web3 Squid Game where AI agents are both the players and the moderator: three elimination rounds, with every result stored on an Aurora-based chain.",
    recognition: "1st place, Aurora AI Agentic Chains bounty, One Trillion Agents Hackathon",
    award: "gold",
    stack: ["Solidity", "Aurora", "Covalent AI Agent SDK"],
    url: "https://devpost.com/software/squidchain",
    images: ["squidchain"],
  },
  {
    slug: "zepto-with-crypto",
    name: "Zepto With Crypto",
    date: "2026-03-15",
    description:
      "An OpenClaw agent that orders groceries from Zepto: it pays in USDC over x402 on GOAT Network testnet, then places the order through Playwright browser automation. Also runs as a Telegram bot.",
    recognition: "1st place, OpenClaw Hack (won a Mac Mini)",
    award: "gold",
    recognitionUrl: "https://luma.com/hml6hbs3",
    stack: ["OpenClaw", "x402", "Playwright"],
    url: "https://github.com/krishnan74/openclaw-agent",
  },
  {
    slug: "snapads",
    name: "SnapAds",
    date: "2025-04",
    description:
      "Watch an ad instead of paying gas: a MetaMask Snap shows an ad and an ERC-4337 Paymaster covers the fee.",
    recognition: "Polygon track winner, ETHGlobal Taipei",
    award: "gold",
    stack: ["Solidity", "MetaMask Snaps", "AI Agents"],
    url: "https://ethglobal.com/showcase/snapads-tsrfi",
    images: ["snapads"],
  },
  {
    slug: "tangled",
    name: "Tangled",
    date: "2023",
    description:
      "A decentralized healthcare platform made on XRP Ledger where users can sell and buy their products without any middleman.",
    recognition: "Best Project and Best Paper, SeedBrains 2023",
    award: "gold",
    stack: ["Next JS", "Solidity", "Supabase"],
    images: ["tangled"],
  },
  {
    slug: "ens-drive",
    name: "ENS Drive",
    date: "2026-09",
    description:
      "Google Drive-style sharing for ENS names: team roles inherited across nested names, checked live on-chain.",
    recognition: "2nd prize, ENS track, ETHGlobal Tokyo",
    award: "silver",
    stack: ["Solidity (Foundry)", "ENSv2", "Next JS"],
    url: "https://ethglobal.com/showcase/ens-drive-qu2m2",
    images: ["ens-drive"],
  },
  {
    slug: "swapyoursuiiii",
    name: "SwapYourSuiiii",
    date: "2025-07",
    description:
      "Cross-chain swaps between EVM chains and Sui on the 1inch Limit Order Protocol with Move HTLC escrows.",
    recognition: "5th place, 1inch track, ETHGlobal Unite DeFi",
    award: "bronze",
    stack: ["Move", "1inch LOP", "Next JS"],
    url: "https://ethglobal.com/showcase/swapyoursuiiii-xwsm8",
    images: ["swapyoursuiiii"],
  },
  {
    slug: "token-defense",
    name: "Token Defense",
    date: "2026-03-07",
    description:
      "Fully on-chain tower defense game on Starknet: defend an AI inference cluster from prompt-injection attacks. Autonomous agents can play via an API.",
    recognition: "3rd place, Dojo Game Jam VIII",
    award: "bronze",
    stack: ["Cairo", "Dojo", "React"],
    url: "https://github.com/krishnan74/Token-Defense",
    images: ["token-defense"],
  },
  {
    slug: "perjury",
    name: "Perjury",
    description:
      "Verification layer for AI agent claims: bonded claims, peer re-derivation and private adjudication via a Chainlink CRE workflow, with ENS reputation.",
    recognition: "ETHOnline",
    award: "participation",
    stack: ["Solidity", "Chainlink", "The Graph"],
    url: "https://ethglobal.com/showcase/perjury-fg18a",
    images: ["perjury"],
  },
  {
    slug: "citycash",
    name: "CityCash",
    description:
      "Event money without a wallet: log in with email, merge balances from any chain into one event balance via EIP-7702 Universal Accounts, spend only inside the event geofence and get the rest refunded when it ends.",
    stack: ["Particle Universal Accounts", "Magic", "Solidity"],
    url: "https://github.com/krishnan74/zonecash",
    images: ["citycash"],
  },
  {
    slug: "back-to-the-future",
    name: "Back To The Future",
    description:
      "A Web3 RPG game based on the famous Hollywood movie (Back To The Future) made on Flow chain.",
    recognition: "Flow Hackathon Season 2",
    award: "participation",
    stack: ["Unity (C#)", "Flow Blockchain", "Flow Unity SDK"],
    url: "https://devfolio.co/projects/back-to-the-future-58a2",
    images: ["back-to-the-future", "back-to-the-future2"],
  },
  {
    slug: "whisper-network",
    name: "Whisper Network",
    description:
      "Coordinator-free P2P AI inference on Gensyn's AXL mesh: queries are auctioned to the cheapest node, and if a node dies mid-task another reclaims the lease and finishes it.",
    recognition: "ETHGlobal Open Agents",
    award: "participation",
    stack: ["Python", "Gensyn AXL", "Ollama"],
    url: "https://ethglobal.com/showcase/whisper-network-rsh4a",
    images: ["whisper-network"],
  },
  {
    slug: "quizup",
    name: "Quizup",
    description:
      "Learning management and evaluation system built as a full stack project with an Angular frontend and a .NET backend.",
    stack: ["Angular", ".NET", "SQL Server"],
    url: "https://github.com/krishnan74/.net-full-stack",
  },
  {
    slug: "castai",
    name: "CastAI",
    description:
      "A Farcaster frame application that allows users to interact with AI characters (fictional or non-fictional) through a chat interface.",
    stack: ["Next JS", "Solidity", "ethers.js"],
    url: "https://github.com/krishnan74/CastAI",
    images: ["castai"],
  },
  {
    slug: "xrp-commerce",
    name: "XRP-Commerce",
    description:
      "A decentralized eCommerce platform made on XRP Ledger where users can sell and buy their products without any middleman.",
    stack: ["Next JS", "XRPL", "Supabase"],
    url: "https://xrp-ecommerce.vercel.app/",
    images: ["xrp-commerce"],
  },
  {
    slug: "nft-mon",
    name: "NFT Mon",
    description:
      "A blockchain NFT card game: users collect, breed and battle unique NFT creatures powered by Chainlink VRF for fair outcomes.",
    stack: ["React", "Solidity", "Chainlink"],
    url: "https://github.com/kimchicurry",
  },
  {
    slug: "prompt-play",
    name: "Prompt Play",
    description:
      "An AI image generation-based multiplayer game where players compete to replicate a random image using image generation prompts. The player whose generated image is most similar to the original wins the round.",
    stack: ["React", "MongoDB", "Galadriel"],
    url: "https://github.com/krishnan74/prompt_play",
  },
  {
    slug: "gpt-learn",
    name: "GPT Learn",
    description:
      "An AI-driven platform offering tailored courses, summaries, interactive learning with AI chatbots, and regional translation, with personalized content for an engaging, accessible experience.",
    stack: ["OpenWeaver Studio", "OpenAI API"],
    images: ["gpt-learn2"],
  },
  {
    slug: "own-your-tune",
    name: "Own Your Tune",
    description:
      "A Web3 music streaming dApp for music artists to sell their music albums directly to the listeners by eliminating the middlemen.",
    stack: ["React JS", "Solidity", "web3.js"],
    url: "https://own-your-tune.vercel.app/",
    images: ["own-your-tune"],
  },
  {
    slug: "notes-com",
    name: "Notes.com",
    description:
      "An educational website for Anna University students to access study notes and question banks.",
    stack: ["Next JS", "MongoDB", "TailwindCSS"],
    url: "https://github.com/krishnan74/notes.com",
  },
  {
    slug: "licet-map",
    name: "LICET Map",
    description:
      "A mobile application to navigate and familiarize people with LICET's infrastructure.",
    stack: ["Flutter", "MongoDB", "Express"],
    url: "https://github.com/krishnan74/LICET-map",
    images: ["licet-map"],
  },
  {
    slug: "nft-bot",
    name: "NFT Bot",
    description:
      "Discord bot for exploring user-owned NFTs. Simple commands surface detailed information about specific NFTs, including metadata.",
    stack: ["discord.js", "OpenSea API", "web3.js"],
    url: "https://github.com/krishnan74/discord-bot",
  },
  {
    slug: "weather-ui",
    name: "Weather UI Clone",
    description: "Recreation of a weather UI design as a React webpage.",
    stack: ["React JS", "TailwindCSS", "UI/UX Design"],
    url: "https://weather-css-five.vercel.app/",
    images: ["weather-css"],
  },
];

const placed = ["gold", "silver", "bronze"];

export const clientProjects = projects.filter((p) => p.client);
export const wonProjects = projects
  .filter((p) => !p.client && placed.includes(p.award))
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
export const otherProjects = projects.filter((p) => !p.client && !placed.includes(p.award));
