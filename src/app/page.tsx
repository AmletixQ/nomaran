import Image from "next/image";

export default async function Home() {
  return (
    <main className="pb-25">
      <section>
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/search-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" />
        <section className="min-h-[80vh]"></section>

        <section className="pb-25">
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 leading-[160%]">
              <p>
                Аузби Зураев (1926-2020) — председатель республиканской
                организации «Ассоциация жертв политических репрессий «Номарæн»,
                почетный член правления всероссийской, международной ассоциаций
                жертв политических репрессий
              </p>
            </div>

            <Image
              width="474"
              height="676"
              alt="president-image"
              src="/images/president-image.png"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <h6 className="text-center">Заголовок</h6>
          <div className="flex h-fit justify-between">
            <Image
              width="230"
              height="360"
              src="/images/books/book-1.png"
              alt="book-1"
            />
            <Image
              width="230"
              height="360"
              src="/images/books/book-2.png"
              alt="book-2"
            />
            <Image
              width="230"
              height="360"
              src="/images/books/book-3.png"
              alt="book-3"
            />
            <Image
              width="230"
              height="360"
              src="/images/books/book-4.png"
              alt="book-4"
            />
            <Image
              width="230"
              height="360"
              src="/images/books/book-5.png"
              alt="book-5"
            />
            <Image
              width="230"
              height="360"
              src="/images/books/book-6.png"
              alt="book-6"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
