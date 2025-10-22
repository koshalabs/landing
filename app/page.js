import EarlyAccessHero from "./_ui/Sections/EarlyAccessHero";
import FAQ from "./_ui/Sections/FAQ";
import Footer from "./_ui/Sections/Footer";
import Header from "./_ui/Sections/Header";
import HeroSection from "./_ui/Sections/HeroSection";
import HowItWorks from "./_ui/Sections/HowItWorks";
import KoshaHero from "./_ui/Sections/KoshaHero";
import MeetKosha from "./_ui/Sections/MeetKosha";
import PartnershipModel from "./_ui/Sections/PartnershipModel";
import WhyKosha from "./_ui/Sections/WhyKosha";
// added this 10-22-205
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <>
    <Header />
    <main className="flex justify-center overflow-x-hidden">
      <div className="w-svw max-w-[1440px]">
        <HeroSection />
        <MeetKosha />
        <KoshaHero />
        <WhyKosha />
        <HowItWorks />
        <PartnershipModel />
        <EarlyAccessHero />
        <FAQ />
        <Footer />
      </div>
    </main>
    </>
  );
}
