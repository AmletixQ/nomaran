import ScreenContainer from "@/components/ScreenContainer";

export default async function Home() {
  return (
    <main className="lg:px-12">
      <section className="flex flex-col gap-10">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/hero-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" />

        <ScreenContainer></ScreenContainer>
      </section>
    </main>
  );
}
