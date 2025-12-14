import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img
          src="/BlackwaterRigsLogoBlack.svg"
          alt="Blackwater Rigs"
          className="h-8 w-auto"
        />
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/about" className="hover:text-black">About</Link>
        </nav>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Blackwater Rigs
        </p>
      </div>
    </footer>
  );
}
