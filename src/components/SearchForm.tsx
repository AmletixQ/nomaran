import Checkbox from "./Checkbox";
import Search from "./icons/Search";
import Input from "./Input";

interface ISearchForm {
  query: string;
  filters: string[];
}

export default function SearchForm({ filters, query }: ISearchForm) {
  return (
    <form method="get" className="relative flex w-10/12 flex-col gap-3">
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
          id="list-of-itl"
          value="list-of-itl"
          name="filter"
          defaultChecked={filters.includes("list-of-itl")}
        >
          Списки приговоренных к ИТЛ, тюремным заключениям или к ссылке
        </Checkbox>
        <Checkbox
          value="list-of-shooted"
          name="filter"
          id="list-of-shooted"
          defaultChecked={filters.includes("list-of-shooted")}
        >
          Список расстрелянных
        </Checkbox>
        <Checkbox
          value="repressed-nat-attribute"
          name="filter"
          id="repressed-nat-attribute"
          defaultChecked={filters.includes("repressed-nat-attribute")}
        >
          Репрессированные по нац. признаку
        </Checkbox>
        <Checkbox
          value="list-of-dispossessed"
          name="filter"
          id="list-of-dispossessed"
          defaultChecked={filters.includes("list-of-dispossessed")}
        >
          Список раскулаченных
        </Checkbox>
        <Checkbox
          value="all"
          className="col-start-1 col-end-3"
          name="filter"
          id="all-list"
          defaultChecked={filters.includes("all") || filters.length === 0}
        >
          Общий список
        </Checkbox>
      </div>
    </form>
  );
}
