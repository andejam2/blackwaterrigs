import Link from "next/link";
import { products } from "@/data/products";

function money(cents: number) {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function ShopPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Shop</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/shop/${p.slug}`}
            className="group bg-white rounded-xl border hover:shadow-md transition overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.name}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold group-hover:text-blue-600">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.short}</p>
              <p className="mt-3 font-bold">{money(p.priceCents)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
