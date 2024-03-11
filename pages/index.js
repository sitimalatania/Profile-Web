import DefaultLayout from "@/components/layout/DefaultLayout";
import Beranda from "@/components/feature/Beranda";
import Project from "@/components/feature/Project";

export default function Home() {
  return (
    <DefaultLayout title="Sitimalatania">
      <Beranda />
      <Project />
    </DefaultLayout>
  );
}
