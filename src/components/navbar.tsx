import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 mb-8">
      <Link href="/" className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer">
        Home
      </Link>
      <Link href="/gallery" className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer">
        My Gallery
      </Link>
      <Link href="/tasks" className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer">
        Bio
      </Link>
    </nav>
  );
}