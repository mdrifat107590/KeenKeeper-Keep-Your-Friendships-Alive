import Image from "next/image";

const socials = [
  { src: "/assets/icon/instagram.png", alt: "Instagram" },
  { src: "/assets/icon/facebook.png", alt: "Facebook" },
  { src: "/assets/icon/twitter.png", alt: "Twitter" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#1f5a4d] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black tracking-tight">KeenKeeper</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100/90">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Social Links</h3>
        <div className="mt-4 flex items-center justify-center gap-3">
          {socials.map((social) => (
            <button
              key={social.alt}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105"
              aria-label={social.alt}
            >
              <Image src={social.src} alt={social.alt} width={17} height={17} />
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-emerald-200/20 pt-6 text-xs text-emerald-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6">
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
