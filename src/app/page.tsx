import Footer from "@/modules/footer-modules/Footer";
import Header from "@/modules/header-modules/Header";
import Service from "@/modules/service-modules/Service";
import Testimonial from "@/modules/testimonial-modules/Testimonial";
import WhyChooseUs from "@/modules/why-choose-us-modules/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="text-white md:max-w-6xl mx-auto bg-[url('/backWallpaper.svg')] bg-top bg-no-repeat bg-cover lg:bg-contain">
        <Header />
        <Service />
        <WhyChooseUs />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
