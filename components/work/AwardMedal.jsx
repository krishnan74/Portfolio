// Medal for a project's `award` (see data/projects.js). Decorative: the
// recognition text beside it says what was won.
const medals = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
  participation: "🏁",
};

export default function AwardMedal({ award }) {
  const medal = medals[award];
  return medal ? (
    <span aria-hidden="true" className="award-medal">
      {medal}
    </span>
  ) : (
    <span aria-hidden="true" className="medal" />
  );
}
