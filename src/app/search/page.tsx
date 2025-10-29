import ScreenContainer from "@/components/ScreenContainer";
import SearchForm from "@/components/search-form/SearchForm";
import { getCachedVictims } from "@/utils/getCachedVictims";
import VictimList from "@/components/victims/VictimList";
import Pagination from "@/components/victims/Pagination";

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
  const pageSize = 50;

  const res = await getCachedVictims(query, filters, page, pageSize);
  const victims = res?.victims ?? [];
  const total = res?.total ?? 1;

  const totalPages = Math.ceil(total / pageSize);

  return (
    <main className="pb-25" id="top">
      <ScreenContainer className="flex items-center justify-center">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/search-bg.jpg)] bg-cover bg-center bg-no-repeat md:bg-fixed" />

        <section className="flex flex-col items-center gap-10 text-white md:max-w-[90%]">
          <div className="flex flex-col items-center text-center">
            <h1 className="pb-2">Поиск жертв репрессий</h1>
            <p className="leading-[140%]">
              Этот сайт предназначен для поиска информации о людях, пострадавших
              от политических репрессий в Северо-Осетинской АССР.
            </p>
          </div>

          <SearchForm query={query} filters={filters} />
        </section>
      </ScreenContainer>

      <section id="results" className="md:mt-20 2xl:mx-25 2xl:mt-20">
        <VictimList page={page} pageSize={pageSize} victims={victims} />
        <Pagination
          filters={filters}
          page={page}
          query={query}
          totalPages={totalPages}
        />
      </section>
    </main>
  );
}
