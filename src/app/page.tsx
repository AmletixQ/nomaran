import ScreenContainer from "@/components/ScreenContainer";
import { BOOKS } from "@/constants/books";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="pb-25 lg:px-12">
      <section className="flex flex-col gap-10">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/search-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" />

        <ScreenContainer></ScreenContainer>

        <section>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-5">
              <p className="leading-[180%]">
                Аузби Зураев (1926-2020) — председатель республиканской
                организации «Ассоциация жертв политических репрессий «Номарæн»,
                почетный член правления всероссийской, международной ассоциаций
                жертв политических репрессий
              </p>
            </div>

            <Image
              width="106"
              height="156"
              className="h-fit sm:h-[234px] sm:w-[159px] md:h-[364px] md:w-[256px] lg:h-[437px] lg:w-[307px] 2xl:h-[676px] 2xl:w-[474px]"
              alt="president-image"
              src="/images/president-image.png"
            />
          </div>
        </section>

        <section className="flex flex-col flex-wrap gap-10">
          <h6 className="text-center text-[22px] font-bold">Заголовок</h6>
          <div className="flex h-fit flex-wrap justify-between gap-3">
            {BOOKS.map((b, i) => (
              <Image
                key={b}
                width="110"
                height="150"
                className="sm:h-[229px] sm:w-[167px] md:h-[308px] md:w-[224px]"
                src={b}
                alt={`book-${i}`}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
