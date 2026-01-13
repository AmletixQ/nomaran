import { STAT_TABLE_DATA } from "@/constants/stat-table";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

import victimIll from "../../../public/images/victims-ill.png";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Жертвы репрессий",
  description:
    "Общее число граждан Северо-Осетинской АССР, подвергшихся незаконным политическим репрессиям.",
  keywords: [
    "жертвы репрессий",
    "репрессированные Северная Осетия",
    "политические репрессии Северная Осетия",
    "реабилитация репрессированных Северная Осетия",
    "номаран",
  ],
  openGraph: {
    title: "Жертвы репрессий",
    description:
      "Общее число граждан Северо-Осетинской АССР, подвергшихся незаконным политическим репрессиям.",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
  twitter: {
    title: "Жертвы репрессий",
    description:
      "Общее число граждан Северо-Осетинской АССР, подвергшихся незаконным политическим репрессиям.",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
};

export default function VictimsPage() {
  const totalCount = "11 104"
  return (
    <main className="flex flex-col gap-10 pt-40 pb-25 md:pt-50 2xl:mx-25 2xl:py-70">
      <section>
        <h2 className="text-center uppercase">Три массовые категории...</h2>
        <div className="flex flex-col gap-3 pt-7.5 leading-[160%] md:grid md:grid-cols-6 md:gap-5">
          <div className="flex flex-col justify-between gap-3 md:col-start-1 md:col-end-5">
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

            <div className="relative flex flex-col items-center gap-6 md:order-0 md:col-start-5 md:col-end-7 md:hidden">
              <div className="border-gray order-first flex max-w-106.25 flex-col rounded-[10px] border bg-white px-2 py-6 text-center md:order-0 2xl:px-5.5 2xl:py-12.5">
                <h1>{totalCount}</h1>
                <p className="text-[16px] font-bold xl:text-[18px]">
                  Общее число граждан Северо-Осетинской АССР, подвергшихся
                  незаконным политическим репрессиям.
                </p>
              </div>

              <Image src={victimIll} width={425} height={425} alt="victims" />
            </div>

            <div className="order-3 flex flex-col gap-4 pt-4">
              <h2 className="text-center text-[16px] uppercase">
                ИНФОРМАЦИЯ ПО 6-ТИ ТОМАМ КНИГИ ПАМЯТИ ЖЕРТВ НЕЗАКОННЫХ
                ПОЛИТИЧЕСКИХ РЕПРЕССИЙ 20-30-40- НАЧАЛА 50-х гг. XX ВЕКА ПО
                СЕВЕРО-ОСЕТИНСКОЙ АССР.
              </h2>
              <table className="border-gray mx-2 border-collapse rounded-sm border text-[16px] md:text-[18px] font-bold">
                <tbody>
                  {STAT_TABLE_DATA.map((item, idx) => (
                    <Fragment key={idx}>
                      <tr>
                        <td
                          valign="middle"
                          align="center"
                          className={cn("border-gray w-12 border")}
                          rowSpan={item.rowSpan}
                        >
                          {item.id}
                        </td>
                        <td
                          className={cn(
                            "border-gray border px-2 py-2",
                            item.subItems && "border-0",
                          )}
                        >
                          {item.description}
                        </td>
                        <td
                          className={cn(
                            "border-gray w-32 border px-2 text-end",
                            item.countClassName,
                          )}
                        >
                          {item.count}
                        </td>
                      </tr>
                      {item.subItems?.map((subItem) => (
                        <tr key={subItem.description}>
                          <td className="px-2 py-2">{subItem.description}</td>
                          <td
                            className={cn(
                              "w-32 px-2 text-end",
                              subItem.countClassName,
                            )}
                          >
                            {subItem.count}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative hidden flex-col items-center justify-between gap-6 md:col-start-5 md:col-end-7 md:flex">
            <div className="border-gray hidden max-w-106.25 flex-col rounded-[10px] border bg-white px-2 py-6 text-center md:flex 2xl:px-4 2xl:py-12.5">
              <h1>{totalCount}</h1>
              <p className="text-[11px] font-bold md:text-[14px] xl:text-[18px]">
                Общее число граждан Северо-Осетинской АССР, подвергшихся
                незаконным политическим репрессиям.
              </p>
            </div>

            <Image src={victimIll} width={425} height={425} alt="victims" />
          </div>
        </div>
      </section>
    </main>
  );
}
