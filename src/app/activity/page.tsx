import { BOOKS } from "@/constants/books";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function ActivityPage() {
  return (
    <main
      className={cn(
        "flex flex-col gap-10 pt-25 md:py-40 2xl:mx-25 2xl:py-70",
        "font-times",
      )}
    >
      <h2 className="text-center text-[38px]">Деятельность организации</h2>

      <section className="flex justify-between gap-18">
        <article className="flex flex-col gap-5">
          <article className="flex flex-col gap-3">
            <h6 className="text-[22px] font-bold">Издания книг</h6>
            <p>
              6 томов Книг Памяти жертв политических репрессий, прокатившихся по
              северо-осетинской земле в годы тоталитарного режима кровавыми
              волнами, унесшими в небытие тысячи крестьян, рабочих и
              представителей интеллигенции. Об этом свидетельствуют документы
              сфабрикованных уголовных дел «врагов народа», а также устные
              свидетельства реабилитированных узников, проживающих на территории
              Республики Северная Осетия—Алания. Книги созданы по инициативе
              правления Северо-Осетинской региональной общественной организации
              «Ассоциация жертв политических репрессий «ПАМЯТЬ ИМЕН (НОМАРАН)»».
            </p>
          </article>

          <article className="flex flex-col gap-3">
            <h6 className="text-[22px]">Памятник «Камень слез»</h6>
            <p>
              Памятник жертвам политических репрессий «Камень слез» находится во
              Владикавказе на улице генерала Плиева в сквере «Тургеневская
              роща». Представляет из себя крупный расколотый валун, на котором
              написано «Жертвам политических репрессий 20-х - 50-х годов XX
              века», а также нарисована колючая проволока.
            </p>
            <p>
              Памятник «Камень слез» во Владикавказе расположен на невысоком,
              большом по площади квадратном пьедестале, который отделан
              красно-коричневыми гранитными плитами. С валуна на постамент
              стекает вода, которая символизирует слезы по людям, подвергшимся
              политическим гонениям. Инициатором установки данного памятного
              камня была Ассоциация жертв незаконных репрессий «Номаран«.
              Открытие монумента состоялось 30 ноября 2005 года. Автором
              памятника «Камень слез» выступил Георгий Скобеев.
            </p>
            <p>
              В Северной Осетии в период 20-50 годов XX века было репрессировано
              около 25 тысяч человек. Из них 1650 человек были расстреляны.
              Ассоциация, инициировавшая установку постамента, проводит работу с
              делами репрессированных граждан. Сейчас статус «враг народа» в
              документах относится к двум тысячам граждан. Люди приносят к
              памятному месту цветы в том числе ежегодно, в День памяти жертв
              политических репрессий - 30 октября.
            </p>
          </article>
        </article>

        <article className="flex h-fit flex-col gap-5">
          <h5 className="text-center text-[22px]">Книги Памяти</h5>
          <div className="flex gap-5">
            {BOOKS.slice(0, 3).map((b, i) => (
              <div key={b.image} className="flex flex-col items-center gap-1">
                <Image
                  width="101"
                  height="145"
                  // className="sm:h-[229px] sm:w-[167px] md:h-[308px] md:w-[224px]"
                  src={b.image}
                  alt={`book-${i}`}
                />
                <a
                  download
                  href={b.file}
                  className="text-center text-slate-600 hover:underline"
                >
                  Том {i + 1} - {b.year}.djvu
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-5">
            {BOOKS.slice(3, 6).map((b, i) => (
              <div key={b.image} className="flex flex-col items-center gap-1">
                <Image
                  width="101"
                  height="145"
                  // className="sm:h-[229px] sm:w-[167px] md:h-[308px] md:w-[224px]"
                  src={b.image}
                  alt={`book-${i + 3}`}
                />
                <a
                  download
                  href={b.file}
                  className="text-center text-slate-600 hover:underline"
                >
                  Том {i + 4} - {b.year}.djvu
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="flex justify-between gap-30">
        <Image
          src="/images/stone-of-tears.jpg"
          alt="stone of tears"
          width={800}
          height={600}
          className="h-[600px]"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h6 className="text-[22px]">Обновленный мемориал</h6>
        <article className="flex justify-between">
          <p>
            30 октября 2018 года во Владикавказе состоялось открытие
            отреставрированного мемориального комплекса — памятника «Камень
            слез» посвященного памяти жертв политических репрессий первой
            половины двадцатого века. Всего на памятном камне выгравировано 1620
            фамилий людей, которые были расстреляны, а впоследствии
            реабилитированы.
          </p>
        </article>
        <Image
          src="/images/restavration-stone.jpg"
          alt="stone of tears"
          width={700}
          height={300}
          className=""
        />
      </section>
    </main>
  );
}
