import { BOOKS } from "@/constants/books";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function ActivityPage() {
  return (
    <main
      className={cn(
        "flex flex-col gap-10 py-25 md:py-40 2xl:mx-25 2xl:py-70",
        "font-times",
      )}
    >
      <h2 className="text-center text-[38px]">Деятельность организации</h2>

      <section className="flex flex-col justify-between gap-5 md:flex-row md:gap-18">
        <article className="flex flex-col gap-5">
          <article className="flex flex-col gap-3">
            <h6 className="text-[22px] font-bold">Издание «Книги Памяти»</h6>
            <p>
              По инициативе руководства Ассоциации жертв политических репрессий
              «Номаран» (Память Имен), при активном участии Аузби Борисовича
              Зураева, в период с 1999 по 2013 годы было издано шесть томов
              «Книги Памяти» — сборника, посвященного жертвам политических
              репрессий в РСО-Алания. В этот многотомный труд вошли материалы
              работы Комиссии по реабилитации лиц, пострадавших от незаконных
              репрессий 20-50-х годов XX века, созданной при правительстве
              Республики Северная Осетия — Алания. В результате деятельности
              комиссии более 13 тысяч граждан республики были официально
              реабилитированы, причём по трем основным категориям: по
              политическим мотивам, раскулаченные и по национальному признаку,
              что стало важным шагом к восстановлению их достоинства и признанию
              несправедливости произошедшего.
            </p>
          </article>

          <article className="flex flex-col gap-3">
            <h6 className="text-[22px]">Открытие мемориала «Камень Слез»</h6>
            <p>
              Мемориал жертвам политических репрессий «Камень слёз»,
              расположенный во Владикавказе на улице генерала Плиева в тени
              сквера «Тургеневская роща», — это внушительный и трогательный
              символ памяти. Перед глазами предстает огромный расколотый валун,
              словно разбитое сердце, на котором красноречиво выгравированы
              слова: «Жертвам политических репрессий 20-х - 50-х годов XX века»,
              а рядом — изящная колючая проволока, напоминающая о жестокости тех
              времён.
            </p>
            <p>
              Инициатором возведения этого памятного камня стал председатель
              Объединения жертв политических репрессий «Номаран» — Аузби
              Борисович Зураев. Торжественное открытие состоялось 30 ноября 2005
              года, а автором этого трогательного образа стал скульптор Георгий
              Сабеев.
            </p>
            <p>
              «Камень слёз» — это не просто памятник, а живая память о тех
              несчастных людях, чьи судьбы были искалечены репрессиями, — тихий,
              но мощный напоминатель о необходимости помнить и никогда не
              забывать.
            </p>
          </article>
        </article>

        <article className="flex h-fit flex-col gap-3 md:gap-5">
          <h5 className="text-[22px] md:text-center">Книги Памяти</h5>
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
          className=""
        />
      </section>

      <section className="flex flex-col gap-3">
        <h6 className="text-[22px]">Реставрация мемориала «Камень слез»</h6>
        <article className="flex justify-between">
          <p>
            Открытие восстановленного мемориального комплекса «Камень слёз»
            стало важным событием в увековечении памяти о жертвах политических
            репрессий, их судьбах и страданиях. Этот памятник служит
            напоминанием современному обществу о трагедиях прошлого, о
            необходимости уважать права человека и бороться с любыми
            проявлениями тоталитаризма. Гравировка 1620 фамилий подчёркивает
            масштаб репрессий и персональную боль каждой семьи, чьи близкие были
            несправедливо уничтожены. Важность этого мемориала заключается также
            в том, что он способствует сохранению исторической памяти и
            поддержки процесса примирения и признания прошлых ошибок.
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
