import Image from "next/image";

export const metadata = {
  title: "Blackwater Rigs | Coming Soon",
  description: "Custom catfish rigs and fishing gear. Launching soon.",
};

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        <Image
            src="/BlackwaterRigsLogoBlack.svg"
            alt="Blackwater Rigs logo"
            width={240}
            height={240}
            className="mx-auto"
        />

        <p className="mt-4 text-lg text-gray-600">
          Custom-built catfish rigs and terminal tackle.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Website launching soon.
        </p>
      </section>
    </main>
  );
}
