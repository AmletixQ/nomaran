import Checkbox from "./Checkbox";
import Search from "./icons/Search";
import Input from "./Input";
import ResetButton from "./ResetButton";

interface ISearchForm {
  query: string;
  filters: string[];
}

export default function SearchForm({ filters, query }: ISearchForm) {
  return (
    <form
      method="get"
      action="#results"
      className="relative flex flex-col gap-3 2xl:w-10/12"
    >
      <div className="border-gray flex w-full justify-between rounded-[10px] border-3 bg-white px-2.5 py-2 md:px-4 md:py-[14px]">
        <Input
          name="query"
          className="placeholder:text-gray w-full outline-gray rounded-sm p-1 text-black outline-0 placeholder:text-[10px] focus:outline-2 2xl:w-10/12"
          type="text"
          placeholder="Введите информацию про репрессированного"
          defaultValue={query}
        />
        <div className="flex items-center gap-2">
          <ResetButton />
          <button type="submit">
            <Search type="black" />
          </button>
        </div>
      </div>
      <div className="flex grid-cols-2 flex-col gap-3 md:grid">
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
