import { BOOKS } from "@/constants/books";
import { cn } from "@/utils/cn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Деятельность организации",
  description: "Информация о деятельности организации Номаран",
  keywords: [
    "деятельность организации",
    "издание книги памяти",
    "мемориал камень слез",
    "акция памяти",
    "реставрация мемориала",
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
            Осетия — Алания. В результате деятельности комиссии более 13 тысяч
            граждан республики были официально реабилитированы, причём по трем
            основным категориям: по политическим мотивам, раскулаченные и по
            национальному признаку, что стало важным шагом к восстановлению их
            достоинства и признанию несправедливости произошедшего.
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <div className="flex flex-wrap justify-evenly gap-2 lg:justify-between">
            {BOOKS.map((b, i) => (
              <div key={b.image} className="flex flex-col items-center gap-1">
                <Image
                  width="101"
                  height="151"
                  src={b.image}
                  alt={`book-${i}`}
                  className="h-37.75 w-25.25"
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
            Мемориал жертвам политических репрессий «Камень слёз», расположенный
            во Владикавказе на улице генерала Плиева в тени сквера «Тургеневская
            роща», — это внушительный и трогательный символ памяти. Перед
            глазами предстает огромный расколотый валун, словно разбитое сердце,
            на котором красноречиво выгравированы слова: «Жертвам политических
            репрессий 20-х - 50-х годов XX века», а рядом — колючая проволока,
            напоминающая о жестокости тех времён.
          </p>
          <p>
            Инициатором возведения этого мемориала стал председатель Ассоциации
            жертв политических репрессий «Номаран» — Аузби Борисович Зураев.
            Торжественное открытие состоялось 30 ноября 2005 года, а автором
            этого памятника стал скульптор Георгий Сабеев.
          </p>
          <p>
            «Камень слёз» — это не просто памятник, а живая память о тех
            несчастных людях, чьи судьбы были искалечены репрессиями, — тихий,
            но мощный символ памяти.
          </p>
        </article>
      </section>

      <section className="flex justify-between gap-30">
        <article className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Image
            width={990}
            height={300}
            alt="first"
            src="/images/open-monument/first.jpg"
            className="aspect-[75 / 53]"
          />
          <Image
            width={990}
            height={200}
            alt="second"
            src="/images/open-monument/second.jpg"
            className="aspect-[75 / 53]"
          />
          <Image
            width={990}
            height={200}
            alt="second"
            src="/images/open-monument/fourth.png"
            className="aspect-[75 / 53]"
          />
          <Image
            src="/images/open-monument/stone-of-tears.jpg"
            alt="stone of tears"
            width={990}
            height={200}
          />
        </article>
      </section>

      <section className="flex flex-col gap-3">
        <h6 className="text-[18px] md:text-[22px]">
          Реставрация мемориала «Камень слез»
        </h6>
        <article className="flex justify-between">
          <p>
            Открытие восстановленного мемориального комплекса «Камень слёз»
            стало важным событием в увековечении памяти о жертвах политических
            репрессий, их судьбах и страданиях. Этот памятник служит
            напоминанием современному обществу о трагедиях прошлого, о
            необходимости уважать права человека и бороться с любыми
            проявлениями тоталитаризма. На гранитном постаменте выгравированы
            имена 1620 жителей республики, расстрелянных в годы незаконных
            политических репрессий в 20-е — 50-е годы XX века. Важность этого
            мемориала заключается также в том, что он способствует сохранению
            исторической памяти и поддержки процесса примирения и признания
            прошлых ошибок.
          </p>
        </article>
        <article className="relative grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/restavration-stone.jpg"
              alt="stone of tears"
              fill
            />
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
          <Image
            width={990}
            height={300}
            alt="first"
            src="/images/events-of-memory/first.png"
          />
          <Image
            width={990}
            height={300}
            alt="second"
            src="/images/events-of-memory/second.png"
          />
          <Image
            width={990}
            height={300}
            alt="fourth"
            src="/images/events-of-memory/fourth.png"
          />
          <Image
            width={990}
            height={300}
            alt="third"
            src="/images/events-of-memory/third.png"
          />
          <Image
            src="/images/events-of-memory/fifth.png"
            alt="fifth"
            width={990}
            height={300}
          />
          <Image
            width={990}
            height={300}
            alt="sixth"
            src="/images/events-of-memory/sixth.png"
          />
        </article>
      </section>
    </main>
  );
}
