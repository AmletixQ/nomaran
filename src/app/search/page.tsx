import ScreenContainer from "@/components/ScreenContainer";
import SearchForm from "@/components/search-form/SearchForm";
import { getCachedVictims } from "@/utils/getCachedVictims";
import VictimList from "@/components/victims/VictimList";
import Pagination from "@/components/victims/Pagination";
import { Metadata } from "next";
import { pageMetadata } from "@/utils/seo";
import { hasSearchIndexParams } from "@/utils/searchHref";
import Link from "next/link";

type SearchParams = { [key: string]: string | string[] | undefined };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;
  const shouldIndex = !hasSearchIndexParams({
    query: params.query,
    filters: params.filter,
    page: params.page,
  });

  return pageMetadata({
    title: "Поиск жертв репрессий",
    description:
      "Поиск информации о людях, пострадавших от политических репрессий в Северо-Осетинской АССР.",
    path: "/search",
    index: shouldIndex,
    follow: true,
    keywords: [
      "поиск жертв репрессий",
      "репрессированные",
      "политические репрессии",
      "поиск репрессированных осетия",
      "номаран",
      "Северо-Осетинская АССР",
      "Поиск репрессированных по Осетии",
      "Список репрессированных Осетия",
      "Расстрелянные в годы репрессий Осетия",
      "Репрессии 1937 года в Осетии",
      "Красный террор в СО АССР",
      "Ссылки в годы репрессий",
    ],
  });
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
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
      <ScreenContainer className="flex items-center justify-center md:-mt-(--header-height) md:pt-(--header-height)">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat md:bg-[url(/images/backgrounds/search-bg.webp)] md:bg-fixed" />

        <section className="flex flex-col items-center gap-10 text-black md:max-w-[90%] md:text-white">
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

      {page <= totalPages ? (
        <section id="results" className="md:mt-20 2xl:mx-25 2xl:mt-20">
          <VictimList page={page} pageSize={pageSize} victims={victims} />
          <Pagination
            filters={filters}
            page={page}
            query={query}
            totalPages={totalPages}
          />
        </section>
      ) : (
        <div
          id="results"
          className="mt-10 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Страница не найдена</h2>
          <p className="text-gray-500">
            Страница, которую вы ищете, не существует. Пожалуйста, вернитесь на
            главную страницу.
          </p>
          <Link href="/search" className="font-bold text-blue-700 underline">
            Вернуться на первую страницу поиска
          </Link>
        </div>
      )}
    </main>
  );
}
