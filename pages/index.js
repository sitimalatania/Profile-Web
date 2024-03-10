import DefaultLayout from "@/components/layout/DefaultLayout";
import Beranda from "@/components/feature/beranda";
import Skills from "@/components/feature/Skills";
import Project from "@/components/feature/Project";
import Footer from "@/components/feature/Footer";

export default function Home() {
  return (
    <DefaultLayout title="Sitimalatania">
      <Beranda />
      <Skills />
      <Project />
      <Footer />
    </DefaultLayout>
  );
}
