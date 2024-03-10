import DefaultLayout from "@/components/layout/DefaultLayout";
import Beranda from "@/components/feature/beranda";
import Skills from "@/components/feature/Skills";
import Project from "@/components/feature/Project";

export default function Home() {
  return (
    <DefaultLayout title="Sitimalatania">
      <Beranda />
      <Skills />
      <Project />
    </DefaultLayout>
  );
}
