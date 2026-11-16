import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import MobileCtaBar from "@/components/site/MobileCtaBar";
import RevealObserver from "@/components/ui/RevealObserver";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="bg-ink pb-20 md:pb-0">
        {children}
      </main>

      <MobileCtaBar />
      <Footer />
      <RevealObserver />
    </>
  );
}
