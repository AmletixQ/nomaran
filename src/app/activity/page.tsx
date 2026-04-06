import { BOOKS } from "@/constants/books";
import { cn } from "@/utils/cn";
import { Metadata } from "next";
import Image from "next/image";

import monumentFirst from "../../../public/images/open-monument/first.jpg";
import monumentSecond from "../../../public/images/open-monument/second.jpg";
import monumentFourth from "../../../public/images/open-monument/fourth.png";
import stoneOfTears from "../../../public/images/open-monument/stone-of-tears.jpg";
import restavrationStone from "../../../public/images/restavration-stone.jpg";

import eventMemoryFirst from "../../../public/images/events-of-memory/first.png";
import eventMemorySecond from "../../../public/images/events-of-memory/second.png";
import eventMemoryThird from "../../../public/images/events-of-memory/third.png";
import eventMemoryFourth from "../../../public/images/events-of-memory/fourth.png";
import eventMemoryFifth from "../../../public/images/events-of-memory/fifth.png";
import eventMemorySixth from "../../../public/images/events-of-memory/sixth.png";

export const metadata: Metadata = {
  title: "Деятельность организации",
  description: "Информация о деятельности организации Номаран",
  keywords: [
    "деятельность организации",
    "издание книги памяти",
    "мемориал камень слез",
    "акция памяти",
    "реставрация мемориала",
    "ссылки в годы репрессий",
  ],
  openGraph: {
    title: "Деятельность организации",
    description: "Информация о деятельности организации Номаран",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
  twitter: {
    title: "Деятельность организации",
    description: "Информация о деятельности организации Номаран",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
};

export default function ActivityPage() {
  return (
    <main
      className={cn(
        "flex flex-col gap-6 pt-40 pb-25 md:py-40 md:pt-50 2xl:mx-25 2xl:py-70",
        "font-helvetica",
      )}
    >
      <section className={cn("flex flex-col justify-between gap-6")}>
        <h2 className="text-center">Деятельность организации</h2>
        <article className="flex flex-col gap-3">
          <h6 className="text-[18px] font-bold md:text-[22px]">
            Издание «Книги Памяти»
          </h6>
          <p>
            По инициативе правления Ассоциации жертв политических репрессий
            «Номаран» («Память Имен»), под руководством Аузби Борисовича
            Зураева, в период с 1999 по 2013 годы было издано шесть томов «Книги
            Памяти» — сборника, посвященного жертвам политических репрессий в
            РСО-Алания. В этот многотомный труд вошли материалы работы Комиссии
            по реабилитации лиц, пострадавших от незаконных репрессий 20-50-х
            годов XX века, созданной при правительстве Республики Северная
            Осетия — Алания. В результате деятельности комиссии более 11 тысяч
            граждан республики были официально реабилитированы, причём по трем
            основным категориям: репрессированые по политическим обвинениям,
            раскулаченные и репрессированые по национальному признаку, что стало
            важным шагом к восстановлению их достоинства и признанию
            несправедливости произошедшего.
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <div className="flex flex-wrap justify-evenly gap-2 lg:justify-between">
            {BOOKS.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <Image
                  width="157"
                  height="235"
                  src={b.image}
                  alt={`book-${i}`}
                  className="h-37.75 w-25.25 lg:h-54 lg:w-36 xl:h-59.5 xl:w-39.5 2xl:h-70 2xl:w-46"
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
        </article>

        <article className="flex flex-col gap-3">
          <h6 className="text-[18px] md:text-[22px]">
            Открытие мемориала «Камень Слез»
          </h6>
          <p>
            Памятник жертвам политических репрессий «Камень слез» во
            Владикавказе, укрытый в тени сквера «Тургеневская роща» на улице
            Генерала Плиева, представляет собой глубокий и величественный символ
            скорби. Центральный образ мемориала — массивный расколотый валун,
            напоминающий разбитое сердце. На камне высечены лаконичные слова:
            «Жертвам политических репрессий 20-х – 50-х годов XX века», а
            дополняет композицию колючая проволока — суровое напоминание о
            жестокости ушедшей эпохи.
          </p>
          <p>
            Создание мемориала стало возможным благодаря инициативе Аузби
            Борисовича Зураева, возглавлявшего ассоциацию «Номаран». Памятник,
            созданный по проекту скульптора Георгия Сабеева, был торжественно
            открыт 30 ноября 2005 года.
          </p>
          <p>
            «Камень слез» — это безмолвный, но выразительный монумент в честь
            тысяч людей, чьи жизни были разрушены государственной машиной. Это
            место служит живым напоминанием о трагических страницах истории,
            которые невозможно забыть.
          </p>
        </article>
      </section>

      <section className="flex justify-between gap-30">
        <article className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Image
            width={990}
            height={300}
            alt="first"
            src={monumentFirst}
            className="aspect-[75 / 53]"
          />
          <Image
            width={990}
            height={200}
            alt="second"
            src={monumentSecond}
            className="aspect-[75 / 53]"
          />
          <Image
            width={990}
            height={200}
            alt="fourth"
            src={monumentFourth}
            className="aspect-[75 / 53]"
          />
          <Image
            width={990}
            height={200}
            alt="stone of tears"
            src={stoneOfTears}
          />
        </article>
      </section>

      <section className="flex flex-col gap-3">
        <h6 className="text-[18px] md:text-[22px]">
          Реставрация мемориала «Камень слез»
        </h6>
        <article className="flex justify-between">
          <p>
            Обновление мемориального комплекса «Камень слез» стало значимым
            вкладом в сохранение памяти о жертвах политических репрессий и их
            трагических судьбах. Теперь на гранитном основании мемориала
            увековечены имена 1620 жителей республики, расстрелянных в годы
            беззакония с 20-х по 50-е годы XX века, напоминая современному
            обществу о катастрофах прошлого, подчеркивая важность защиты прав
            человека и недопустимость тоталитарного произвола.
          </p>
        </article>
        <article className="relative grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image src={restavrationStone} alt="stone of tears" fill />
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <video controls preload="metadata">
              <source src="/video.mp4#t=1" type="video/mp4" />
            </video>
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-3">
        <h6 className="text-[18px] md:text-[22px]">Акция памяти</h6>
        <article className="flex justify-between">
          <p>
            Ежегодно 30 октября, в День памяти жертв политических репрессий, у
            мемориала «Камень слез» во Владикавказе, по инициативе ассоциации
            «Номаран» проводится акция памяти жертв политических репрессий
            20-30-40-х — начала 1950-х годов XX века. В этот день, сотни жителей
            республики собираются у мемориала с цветами, чтобы почтить память
            родных и близких, ставших невинными жертвами произвола и беззакония.
            На митинге у мемориала выступают представители государственных
            структур, общественных движений и религиозных организаций. Основная
            тема всех выступлений — «Такое не должно повториться!»
          </p>
        </article>
      </section>

      <section>
        <article className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Image width={990} height={300} alt="first" src={eventMemoryFirst} />
          <Image
            width={990}
            height={300}
            alt="second"
            src={eventMemorySecond}
          />
          <Image
            width={990}
            height={300}
            alt="fourth"
            src={eventMemoryFourth}
          />
          <Image width={990} height={300} alt="third" src={eventMemoryThird} />
          <Image width={990} height={300} alt="fifth" src={eventMemoryFifth} />
          <Image width={990} height={300} alt="sixth" src={eventMemorySixth} />
        </article>
      </section>
    </main>
  );
}
