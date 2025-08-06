import { client } from "@/sanity/client";
import Link from "next/link";
import { PortableText } from "next-sanity";

const HEALTH_TIP_QUERY = `*[_type == "healthTip" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function HealthTips({ params }) {
  const healthTip = await client.fetch(HEALTH_TIP_QUERY, await params, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/health-tips" className="hover:underline">
        ← Back to health tips list
      </Link>
      <h1 className="text-4xl font-bold mb-8">{healthTip.title}</h1>
      <div className="prose">
        {Array.isArray(healthTip.healthTipText) && (
          <PortableText value={healthTip.healthTipText} />
        )}
      </div>
    </main>
  );
}
