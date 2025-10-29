import Image from "next/image";

export default function VictimsPage() {
  return (
    <main className="flex flex-col gap-10 py-25 pb-12.5 md:pt-40 2xl:mx-25 2xl:py-70">
      <section>
        <h2 className="text-center uppercase">Три массовые категории...</h2>
        <div className="flex flex-col gap-7.5 pt-7.5 leading-[160%] md:grid md:grid-cols-5 md:gap-5 2xl:pt-15">
          <div className="flex flex-col gap-3 md:col-start-1 md:col-end-4 md:gap-2.5 2xl:gap-5">
            <p>
              <span className="font-bold">I.</span> Первая массовая категория —
              люди, арестованные по политическим обвинениям органами
              государственной безопасности (ВЧК-ОГПУ-НКВД-МГБ-КГБ) и
              приговоренные судебными или квазисудебными (ОСО, «тройки»,
              «двойки» и т.п.) инстанциями к смертной казни, к разным срокам
              заключения в лагерях и тюрьмах или к ссылке.
            </p>

            <p>
              <span className="font-bold">II.</span> Вторая массовая категория
              репрессированных по политическим мотивам — крестьяне,
              административно высланные с места жительства в ходе кампании
              «уничтожения кулачества как класса».
            </p>

            <p>
              <span className="font-bold">III.</span> Третья массовая категория
              жертв политических репрессий — граждане Северо-Осетинской АССР,
              репрессированные по национальному признаку (корейцы, чеченцы,
              ингуши, греки, немцы, турки, армяне).
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <h2 className="text-center text-[16px] uppercase">
                ИНФОРМАЦИЯ ПО 6-ТИ ТОМАМ КНИГИ ПАМЯТИ ЖЕРТВ НЕЗАКОННЫХ
                ПОЛИТИЧЕСКИХ РЕПРЕССИЙ 20-30-40- НАЧАЛА 50-х гг. XX ВЕКА ПО
                СЕВЕРО-ОСЕТИНСКОЙ АССР.
              </h2>
              <article className="border-gray grid grid-cols-4 rounded-md border bg-white p-2">
                <div className="text-center">
                  <h5 className="text-[15px]">
                    Реабелитировано репрессированных по политическим мотивам
                  </h5>
                  <p className="text-[1.6rem]">8755</p>
                </div>

                <div className="text-center">
                  <h5 className="text-[15px]">
                    Реабелитировано по админ. мотивам раскулаченных
                  </h5>
                  <p className="text-[1.6rem]">2177</p>
                </div>

                <div className="text-center">
                  <h5 className="text-[15px]">
                    Реабелитировано репрессированных по национальному признаку
                  </h5>
                  <p className="text-[1.6rem]">2290</p>
                </div>

                <div className="text-center">
                  <h5 className="text-[15px]">Итого</h5>
                  <p className="text-[1.6rem]">13222</p>
                </div>

                <div className="text-center">
                  <h5 className="text-[15px]">
                    Из них приговоренных к ВМН (расстрел)
                  </h5>
                  <p className="text-[1.6rem]">1684</p>
                </div>
              </article>
            </div>
          </div>
          <div className="relative order-first flex flex-col items-center gap-6 md:order-none md:col-start-4 md:col-end-6">
            <Image
              className="hidden lg:block"
              src="/images/victims-ill.png"
              width={500}
              height={500}
              alt="victims"
            />

            <div className="border-gray order-first flex max-w-[500px] flex-col rounded-[10px] border bg-white px-2 py-6 text-center md:order-none 2xl:px-5.5 2xl:py-12.5">
              <h1>13 222</h1>
              <p className="text-[11px] font-bold md:text-[14px] xl:text-[18px]">
                Общее число реабелитированных, подвергшихся незаконным
                политическим репрессиям в Северо-Осетинской АССР.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
