import Image from "next/image";

export default function VictimsPage() {
  return (
    <main className="flex flex-col gap-10 pt-40 pb-25 md:pt-50 2xl:mx-25 2xl:py-70">
      <section>
        <h2 className="text-center uppercase">Три массовые категории...</h2>
        <div className="flex flex-col gap-3 pt-7.5 leading-[160%] md:grid md:grid-cols-5 md:gap-5">
          <div className="flex flex-col gap-3 md:col-start-1 md:col-end-4">
            <p className="text-[16px]">
              <span className="font-bold">I.</span> Первая массовая категория —
              люди, арестованные по политическим обвинениям органами
              государственной безопасности (ВЧК-ОГПУ-НКВД-МГБ-КГБ) и
              приговоренные судебными или квазисудебными (ОСО, «тройки»,
              «двойки» и т.п.) инстанциями к смертной казни, к разным срокам
              заключения в лагерях и тюрьмах или к ссылке.
            </p>

            <p className="text-[16px]">
              <span className="font-bold">II.</span> Вторая массовая категория
              репрессированных по политическим мотивам — крестьяне,
              административно высланные с места жительства в ходе кампании
              «уничтожения кулачества как класса».
            </p>

            <p className="text-[16px]">
              <span className="font-bold">III.</span> Третья массовая категория
              жертв политических репрессий — граждане Северо-Осетинской АССР,
              репрессированные по национальному признаку (корейцы, чеченцы,
              ингуши, греки, немцы, турки, армяне).
            </p>

            <div className="relative flex flex-col items-center gap-6 md:order-none md:col-start-4 md:col-end-6 md:hidden">
              <div className="border-gray order-first flex max-w-[500px] flex-col rounded-[10px] border bg-white px-2 py-6 text-center md:order-none 2xl:px-5.5 2xl:py-12.5">
                <h1>11 138</h1>
                <p className="text-[16px] font-bold xl:text-[18px]">
                  Общее число граждан Северо-Осетинской АССР, подвергшихся
                  незаконным политическим репрессиям.
                </p>
              </div>

              <Image
                src="/images/victims-ill.png"
                width={500}
                height={500}
                alt="victims"
              />
            </div>

            <div className="order-3 flex h-full flex-col gap-4 pt-4">
              <h2 className="text-center text-[16px] uppercase">
                ИНФОРМАЦИЯ ПО 6-ТИ ТОМАМ КНИГИ ПАМЯТИ ЖЕРТВ НЕЗАКОННЫХ
                ПОЛИТИЧЕСКИХ РЕПРЕССИЙ 20-30-40- НАЧАЛА 50-х гг. XX ВЕКА ПО
                СЕВЕРО-ОСЕТИНСКОЙ АССР.
              </h2>
              <table className="border-gray mx-2 rounded-sm border text-[16px]">
                <tbody>
                  <tr className="border-gray border">
                    <td valign="top" align="center" className="w-12 hidden md:table-cell">
                      1
                    </td>
                    <td className="border-gray border px-2">
                      Реабелитировано репрессированных по политическим
                      обвинениям
                      <br />
                      – ИТЛ, тюремные заключения, ссылки
                      <br />– Высшая мера наказания (расстрел)
                    </td>
                    <td valign="bottom" className="w-32 px-2">
                      5924 чел.
                      <br />
                      1656 чел.
                    </td>
                  </tr>
                  <tr className="border-gray border px-2">
                    <td valign="top" align="center" className="w-12 hidden md:table-cell">
                      2
                    </td>
                    <td className="border-gray border px-2">
                      Реабелитировано в ходе кампании по
                      &quot;раскулачиванию&quot;
                    </td>
                    <td className="px-2">1710 чел.</td>
                  </tr>
                  <tr className="border-gray border">
                    <td valign="top" align="center" className="w-12 hidden md:table-cell">
                      3
                    </td>
                    <td className="border-gray border px-2">
                      Репрессировано по национальному признаку
                    </td>
                    <td className="px-2">1848 чел.</td>
                  </tr>
                  <tr className="border-gray border">
                    <td className="hidden md:table-cell"></td>
                    <td className="border-gray border px-2">Всего</td>
                    <td className="px-2">11138 чел.</td>
                  </tr>
                </tbody>
              </table>
              {/* <article className="border-gray grid grid-cols-1 h-full gap-1 rounded-md border bg-white p-2">
                <div className="text-center">
                  <h5 className="text-[16px]">
                    Реабелитировано репрессированных по политическим мотивам
                  </h5>
                  <div className="flex flex-col pt-2">
                    <h5 className="text-[16px]">
                      1. ИТЛ, тюремные заключения, ссылки
                    </h5>
                    <p className="text-[22px]">5924 чел.</p>
                  </div>
                </div>

                <div className="flex flex-col text-center">
                  <h5 className="text-[16px]">
                    2. Высшая мера наказания (расстрел)
                  </h5>
                  <p className="text-[22px]">1656 чел.</p>
                </div>

                <div className="bg-gray h-[1px]"></div>

                <div className="text-center">
                  <h5 className="text-[16px]">
                    Реабелитированно репрессированных по админ. мотивам
                    (раскулаченных)
                  </h5>
                  <p className="text-[22px]">1710 чел.</p>
                </div>

                <div className="text-center">
                  <h5 className="text-[16px]">
                    Реабелитировано репрессированных по национальному признаку
                  </h5>
                  <p className="text-[22px]">1848 чел.</p>
                </div>

                <div className="bg-gray h-[1px]"></div>

                <div className="text-center">
                  <h5 className="text-[16px]">Итого</h5>
                  <p className="text-[22px]">11138 человек</p>
                </div>
              </article> */}
            </div>
          </div>

          <div className="relative hidden flex-col items-center gap-6 md:col-start-4 md:col-end-6 md:flex">
            <div className="border-gray hidden max-w-[500px] flex-col rounded-[10px] border bg-white px-2 py-6 text-center md:flex 2xl:px-5.5 2xl:py-12.5">
              <h1>11 138</h1>
              <p className="text-[11px] font-bold md:text-[14px] xl:text-[18px]">
                Общее число граждан Северо-Осетинской АССР, подвергшихся
                незаконным политическим репрессиям.
              </p>
            </div>

            <Image
              src="/images/victims-ill.png"
              width={500}
              height={500}
              alt="victims"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
