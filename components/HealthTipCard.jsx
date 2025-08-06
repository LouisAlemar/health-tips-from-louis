import Link from "next/link";

export default function HealthTipCard({ id, title, slug, category }) {
  return (
    <li key={id}>
      <Link
        href={`/health-tips/${slug}`}
        prefetch={false}
        passHref
        className="block rounded-lg border p-4 shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
        aria-label={`Read health tip: ${title}`}
      >
        <div className="text-xs uppercase mb-1 opacity-80">
          {category || "General"}
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </Link>
    </li>
  );
}
