import Pagination from "@/components/Pagination";
import SearchForm from "@/components/SearchForm";
import VictimList from "@/components/VictimList";
import { getCachedVictims } from "@/utils/getCachedVictims";

export const dynamic = "force-dynamic";

export default async function SearchPage({
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

  const page = Math.max(1, Number(params.page) || 1);
  const pageSize = 15;

  const res = await getCachedVictims(query, filters, page, pageSize);
  const victims = res?.victims ?? [];
  const total = res?.total ?? 1;

  const totalPages = Math.ceil(total / pageSize);
  return (
    <main className="pb-25">
      <section className="flex min-h-[80vh] justify-center">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/hero-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" />

        <section className="flex max-w-[80%] flex-col items-center gap-10 text-white">
          <div className="flex flex-col items-center text-center">
            <h1>Поиск жертв репрессий</h1>
            <p className="w-5/7">
              Этот сайт предназначен для поиска информации о людях, пострадавших
              от политических репрессий в Северо-Осетинской АССР.
            </p>
          </div>

          <SearchForm query={query} filters={filters} />
        </section>
      </section>

      <section id="results" className="mx-25">
        <VictimList victims={victims} />
        <Pagination
          query={query}
          filters={filters}
          page={page}
          totalPages={totalPages}
        />
      </section>
    </main>
  );
}
