import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#edf0f3]">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-10 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
