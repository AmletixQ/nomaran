import Search from "../icons/Search";
import Input from "../ui/Input";
import ResetButton from "./ResetButton";
import Checkboxes from "./Checkboxes";

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
      <div className="border-gray relative flex w-full justify-between rounded-[10px] border-3 bg-white px-2.5 py-2 md:px-4 md:py-[14px]">
        <Input
          name="query"
          className="placeholder:text-gray outline-gray w-full rounded-sm p-1 text-black outline-0 placeholder:text-[10px] focus:outline-2 lg:placeholder:text-[14px] xl:w-10/12"
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
      <Checkboxes filters={filters.length > 0 ? filters : ["all-list"]} />
    </form>
  );
}
