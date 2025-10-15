import InfiniteVictimList from "@/components/victims/InfiniteVictimList";
import ScreenContainer from "@/components/ScreenContainer";
import SearchForm from "@/components/SearchForm";
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

  return (
    <main className="pb-25" id="top">
      <ScreenContainer className="flex items-center justify-center">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/search-bg.jpg)] bg-cover bg-center bg-no-repeat md:bg-fixed" />

        <section className="flex flex-col items-center gap-10 text-white md:max-w-[80%]">
          <div className="flex flex-col items-center text-center">
            <h1 className="pb-2">Поиск жертв репрессий</h1>
            <p className="leading-[140%] xl:w-5/7">
              Этот сайт предназначен для поиска информации о людях, пострадавших
              от политических репрессий в Северо-Осетинской АССР.
            </p>
          </div>

          <SearchForm query={query} filters={filters} />
        </section>
      </ScreenContainer>

      <section id="results" className="md:mt-20 2xl:mx-25 2xl:mt-20">
        <InfiniteVictimList
          initialVictims={victims}
          query={query}
          filters={filters}
          initialPage={page}
          pageSize={pageSize}
          total={total}
        />
      </section>
    </main>
  );
}
