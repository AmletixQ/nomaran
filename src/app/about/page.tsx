import ScreenContainer from "@/components/ScreenContainer";

export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center gap-7.5 md:gap-12.5 2xl:mx-25 2xl:gap-30 2xl:py-25">
      <ScreenContainer className="flex flex-col gap-7.5 md:gap-15 lg:gap-30">
        <section className="flex flex-col gap-5 pt-50 text-center 2xl:gap-8">
          <h2>Об организации Номаран</h2>
          <p className="leading-[160%] sm:text-[14px] lg:text-[16px]">
            Наш проект «Номаран» создан для того, чтобы вернуть людям,
            подвергшимся репрессиями их имена и их историю. Мы верим,
            что память — это не просто дань уважения прошлому. Это основа нашего
            настоящего и будущего. Знание о том, что произошло, — это главный
            гарант того, что трагедия не повторится. Восстанавливая истории
            однажды разбитых судеб, мы собираем рассыпанную мозаику нашей общей
            истории, чтобы увидеть её полную, неискажённую картину.
          </p>
        </section>

        <section>
          <h2>Документы</h2>
        </section>
      </ScreenContainer>
    </main>
  );
}
