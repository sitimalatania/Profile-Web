import DefaultLayout from "@/components/layout/DefaultLayout";
import Beranda from "@/components/feature/Beranda";
import Project from "@/components/feature/Project";
import Skills from "@/components/feature/Skills";

export default function Home() {
  return (
    <DefaultLayout title="Sitimalatania">
      <Beranda />
      <Skills />
      <Project />
    </DefaultLayout>
  );
}
