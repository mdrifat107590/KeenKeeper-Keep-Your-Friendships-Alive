"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/timeline", label: "Timeline", icon: "clock" },
  { href: "/stats", label: "Stats", icon: "chart" },
];

function NavIcon({ type }) {
  if (type === "home") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V20h14v-9.5" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 18V6" />
      <path d="M10 18V10" />
      <path d="M16 18V13" />
      <path d="M22 18V4" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/icon/logo.png" alt="KeenKeeper logo" width={28} height={28} priority />
          <span className="text-2xl font-black tracking-tight text-slate-800">KeenKeeper</span>
        </Link>

        <nav className="flex items-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-emerald-800 bg-emerald-800 text-white"
                    : "border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-100"
                }`}
              >
                <NavIcon type={link.icon} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
