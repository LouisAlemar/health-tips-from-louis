import { client } from "@/sanity/client";
import HealthTipCard from "@/components/HealthTipCard";

const HEALTH_TIPS_QUERY = `*[
  _type == "healthTip"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category}`;

const options = { next: { revalidate: 30 } };

export default async function HealthTips() {
  const healthTips = await client.fetch(HEALTH_TIPS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-300">Health Tips</h1>
        <p className="mt-2 text-sm text-gray-600">
          Browse our latest health advice and wellness suggestions.
        </p>
      </header>

      <ul className="space-y-4">
        {healthTips.map((tip) => (
          <HealthTipCard
            key={tip._id}
            id={tip._id}
            title={tip.title}
            slug={tip.slug.current}
            category={tip.category}
          />
        ))}
      </ul>
    </main>
  );
}
