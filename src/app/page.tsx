import Checkbox from "@/components/Checkbox";
import Search from "@/components/icons/Search";
import Input from "@/components/Input";
import VictimList from "@/components/VictimList";
import { getCachedVictims } from "@/utils/getCachedVictims";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.query === "string" ? searchParams.query : "";
  const filters = Array.isArray(searchParams.filter)
    ? searchParams.filter
    : searchParams.filter
      ? [searchParams.filter]
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

        <div className="relative w-9/12">
          <form method="get" className="flex flex-col gap-3">
            <div className="border-gray flex justify-between rounded-[10px] border-3 bg-white px-4 py-[14px]">
              <Input
                name="query"
                className="placeholder:text-gray outline-gray w-10/12 rounded-sm p-1 text-black outline-0 focus:outline-2"
                type="text"
                placeholder="Введите информацию про репрессированного"
                defaultValue={query}
              />
              <button type="submit">
                <Search type="black" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Checkbox
                value="all"
                name="filter"
                title="Общий список"
                id="all-list"
                defaultChecked={filters.length === 0}
              />
              <Checkbox
                value="repressed_nat_attribute"
                name="filter"
                title="Репрессированные по нац. признаку"
                id="repressed-nat-attr"
                defaultChecked={filters.includes("repressed_nat_attribute")}
              />
              <Checkbox
                value="repressed"
                name="filter"
                title="Список репрессированных"
                id="list-shooted"
                defaultChecked={filters.includes("repressed")}
              />
              <Checkbox
                value="dispossessed"
                name="filter"
                title="Список раскулаченных"
                id="list-dispossessed"
                defaultChecked={filters.includes("dispossessed")}
              />
            </div>
          </form>
        </div>
      </section>

      <section>
        <VictimList victims={res} />
      </section>
    </main>
  );
}
