import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20">
      {/* HERO */}
      <section className="text-center">
        <Image
          src="/BlackwaterRigsLogo.png"
          alt="Blackwater Rigs"
          width={450}
          height={120}
          priority
          className="mx-auto mb-6"
        />
        <h1 className="sr-only">Blackwater Rigs</h1>
        <p className="mt-4 text-lg text-gray-600">
          Tough, snag-smart catfish rigs and dragging weights that hold in current.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/shop"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Shop rigs
          </Link>
          <Link
            href="/about"
            className="px-5 py-3 rounded-lg border hover:bg-gray-50"
          >
            About us
          </Link>
        </div>
      </section>

      {/* VALUE PROPS (no shopping on the homepage) */}
      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Snag-smart design</h3>
          <p className="mt-2 text-sm text-gray-600">
            Built to slide through rock and brush so you can focus on the bite.
          </p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Made for current</h3>
          <p className="mt-2 text-sm text-gray-600">
            Rigs and weights that track straight and stay down in heavy flows.
          </p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Field-tested</h3>
          <p className="mt-2 text-sm text-gray-600">
            Real-water tested, dialed for casts, drifts, and long pulls.
          </p>
        </div>
      </section>

      {/* IMAGE BANNER (optional, non-shopping) */}
      <section className="mt-16">
        <div className="aspect-[16/7] w-full overflow-hidden rounded-2xl bg-gray-100">
          <img
            src="/productimages/4packPlaceHolder.jpg"
            alt="Blackwater Rigs gear"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-sm text-gray-500">
          Gear you can abuse. Results you can trust.
        </p>
      </section>

      {/* CTA STRIP */}
      <section className="mt-16 rounded-xl border p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Ready to rig up?</h2>
          <p className="text-gray-600">Browse the lineup or get in touch.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/shop"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Browse shop
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 rounded-lg border hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
