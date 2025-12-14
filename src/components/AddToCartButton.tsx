"use client";
import { addToCart } from "@/lib/cart";
import { useState } from "react";

type Props = {
  product: { id: string; slug: string; name: string; priceCents: number; image?: string };
};

export default function AddToCartButton({ product }: Props) {
  const [adding, setAdding] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <button
      disabled={adding}
      onClick={() => {
        setAdding(true);
        addToCart(product, 1);
        setAdding(false);
        setDone(true);
        const t = setTimeout(() => setDone(false), 1100);
        return () => clearTimeout(t);
      }}
      className={`px-5 py-3 rounded-lg text-white transition
                  ${adding ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
    >
      {done ? "Added ✓" : adding ? "Adding…" : "Add to cart"}
    </button>
  );
}
