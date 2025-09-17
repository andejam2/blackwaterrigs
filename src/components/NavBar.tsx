import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <Image
            src="/BlackwaterRigsLogo.png"
            alt="Blackwater Rigs logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/shop" className="hover:text-blue-600">Shop</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
