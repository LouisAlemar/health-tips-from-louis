import { client } from "@/sanity/client";
import Link from "next/link";
import { PortableText } from "next-sanity";

const HEALTH_TIP_QUERY = `*[_type == "healthTip" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function HealthTips({ params }) {
  const healthTip = await client.fetch(HEALTH_TIP_QUERY, await params, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl px-4 py-10 flex flex-col gap-6">
      <Link
        href="/health-tips"
        className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded w-fit"
      >
        ← Back to health tips list
      </Link>

      <article>
        <header className="mb-6">
          <h1
            className="text-4xl font-extrabold leading-tight mb-2"
            style={{ color: "var(--foreground)" }}
          >
            {healthTip.title}
          </h1>
          {healthTip.category && (
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {healthTip.category}
            </p>
          )}
        </header>

        <section
          className="prose prose-base max-w-none"
          style={{
            color: "var(--foreground)",
          }}
        >
          {Array.isArray(healthTip.healthTipText) && (
            <PortableText value={healthTip.healthTipText} />
          )}
        </section>
      </article>
    </main>
  );
}
