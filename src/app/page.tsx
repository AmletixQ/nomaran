import SearchForm from "@/components/SearchForm";
import VictimList from "@/components/VictimList";
import { getCachedVictims } from "@/utils/getCachedVictims";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;

  const query = typeof params.query === "string" ? params.query : "";
  const filters = Array.isArray(params.filter)
    ? params.filter
    : params.filter
      ? [params.filter]
      : [];

  const res = await getCachedVictims(query, filters);

  return (
    <main className="min-h-screen pb-25">
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/hero-bg.jpg)]" />

      <section className="flex min-h-screen flex-col items-center justify-center gap-10 text-white">
        <div className="flex flex-col items-center text-center">
          <h1>Поиск жертв репрессий</h1>
          <p className="w-5/7">
            Этот сайт предназначен для поиска информации о людях, пострадавших
            от политических репрессий в Северо-Осетинской АССР.
          </p>
        </div>

        <SearchForm query={query} filters={filters} />
      </section>

      <section>
        <VictimList victims={res} />
      </section>
    </main>
  );
}
