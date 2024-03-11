import Head from "next/head";
import Header from "../feature/Header";
import MovingGradientBackground from "../feature/MovingGradientBackground";

function DefaultLayout({ children, title = "Embersense" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MovingGradientBackground>
        <div className="flex w-full min-h-[100vh]">
          <div className="flex flex-col w-full">
            <Header></Header>
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </MovingGradientBackground>
    </>
  );
}

export default DefaultLayout;
