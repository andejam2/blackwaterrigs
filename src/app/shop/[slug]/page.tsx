import { notFound } from "next/navigation";
import { products } from "@/data/products";

function money(cents: number) {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// Next.js 15: params may be a Promise — await it.
type PageProps = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const img = product.image || "/productimages/4packPlaceHolder.jpg";

  return (
    <article className="grid gap-8 md:grid-cols-2">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img src={img} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-600">{product.short}</p>
        <p className="mt-4 text-2xl font-semibold">{money(product.priceCents)}</p>

        <div className="mt-6 flex gap-3">
          <button className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Add to cart
          </button>
          <a href="/shop" className="px-5 py-3 rounded-lg border hover:bg-gray-50">
            Back to shop
          </a>
        </div>
      </div>
    </article>
  );
}
