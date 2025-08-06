import { client } from "@/sanity/client";
import Link from "next/link";

const HEALTH_TIPS_QUERY = `*[
  _type == "healthTip"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category}`;

const options = { next: { revalidate: 30 } };

export default async function HealthTips() {
  const healthTips = await client.fetch(HEALTH_TIPS_QUERY, {}, options);

  console.log(healthTips);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Health Tips</h1>
      <ul className="flex flex-col gap-y-4">
        {healthTips.map((healthTip) => (
          <li className="hover:underline" key={healthTip._id}>
            <Link href={`/health-tips/${healthTip.slug.current}`}>
              <h4 className="text-sm font-semibold">{healthTip.category}</h4>
              <h2 className="text-xl font-semibold">{healthTip.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
