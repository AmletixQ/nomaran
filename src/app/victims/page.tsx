import Image from "next/image";

export default function VictimsPage() {
  return (
    <main className="flex flex-col gap-10 py-25 pb-12.5 md:pt-40 2xl:mx-25 2xl:py-70">
      <section>
        <h2 className="text-center uppercase">Три массовые категории...</h2>
        <div className="flex flex-col gap-7.5 pt-7.5 leading-[160%] md:grid md:grid-cols-5 md:gap-5 2xl:pt-15">
          <div className="flex flex-col gap-3 font-bold md:col-start-1 md:col-end-4 md:gap-2.5 2xl:gap-5">
            <p className="font-bold">
              I. Первая массовая категория - люди, арестованные по политическим
              обвинениям органами государственной безопасности
              (ВЧК-ОГПУ-НКВД-МГБ-КГБ) и приговоренные судебными или
              квазисудебными (ОСО, «тройки», «двойки» и т.п.) инстанциями к
              смертной казни, к разным срокам заключения в лагерях и тюрьмах или
              к ссылке.
            </p>

            <p className="font-bold">
              II. Вторая массовая категория репрессированных по политическим
              мотивам – крестьяне, административно высланные с места жительства
              в ходе кампании «уничтожения кулачества как класса».
            </p>

            <p className="font-bold">
              III. Третья массовая категория жертв политических репрессий —
              народы (корейцы, чеченцы, ингуши, греки, немцы, турки, армяне),
              проживавшие на территории Северо-Осетинской АССР, которые были
              депортированы на переселение в Сибирь, Среднюю Азию и Казахстан.
            </p>

            <div className="flex flex-col gap-4">
              <h2 className="text-center text-[20px] uppercase">
                ИНФОРМАЦИЯ ПО 6-ТИ ТОМАМ КНИГИ ПАМЯТИ ЖЕРТВ НЕЗАКОННЫХ
                ПОЛИТИЧЕСКИХ РЕПРЕССИЙ И РЕПРЕССИРОВАННЫМ НАРОДАМ 20-30-40-
                НАЧАЛО 50-х гг. XX ВЕКА ПО РСО-АЛАНИЯ
              </h2>
              <table className="border-gray table-column border-separate border-spacing-4 rounded-md border bg-white">
                <thead className="w-fit align-top text-[16px]">
                  <tr>
                    <th className="w-fit text-start">
                      Репрессировано по политическим мотивам
                    </th>
                    <th className="text-start">
                      По админ, мотивам раскулачено
                    </th>
                    <th className="text-start">По национальному признаку</th>
                    <th className="text-start">Итого</th>
                    <th className="text-start">
                      Из них приговорены к ВМН (расстрел)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[1.8rem]">
                  <tr>
                    <td>8755</td>
                    <td>2177</td>
                    <td>2290</td>
                    <td>13222</td>
                    <td>1684</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="relative order-first flex flex-col items-center gap-6 md:order-none md:col-start-4 md:col-end-6">
            <Image
              src="/images/victims-ill.png"
              width={500}
              height={500}
              alt="victims"
            />

            <div className="border-gray order-first flex flex-col rounded-[10px] border bg-white px-2.5 py-7.5 text-center md:order-none 2xl:px-5.5 2xl:py-12.5">
              <h1>13 222</h1>
              <p className="text-[11px] font-bold md:text-[14px] xl:text-[18px]">
                Столько насчитывается людей, подвергшихся репрессиям в
                Северо-Осетинской АССР.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
