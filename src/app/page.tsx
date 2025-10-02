import Checkbox from "@/components/Checkbox";
import Search from "@/components/icons/Search";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <center className="mt-40 text-white flex flex-col items-center gap-10">
        <div>
          <h1>Поиск жертв репрессий</h1>
          <p className="w-5/7">
            Этот сайт предназначен для поиска информации о людях, пострадавших
            от политических репрессий в Северо-Осетинской АССР.
          </p>
        </div>

        <div className="relative w-9/12 flex flex-col gap-3">
          <div className="flex justify-between bg-white border-3 border-gray rounded-[10px] py-[14px] px-4">
            <Input
              className="placeholder:text-gray text-black outline-0 focus:outline-2 outline-gray w-10/12 rounded-sm p-1"
              type="text"
              placeholder="Введите информацию про репрессированного"
            />
            <Search type="black" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Checkbox title="Общий список" id="all-list" />
            <Checkbox
              title="Репрессированные по нац. признаку"
              id="repressed-nat-attr"
            />
            <Checkbox title="Список расстрелянных" id="list-shooted" />
            <Checkbox title="Список раскулаченных" id="list-dispossessed" />
          </div>
        </div>
      </center>

      <div className="bg-[url(/images/hero-bg.jpg)] absolute w-full h-full top-0 left-0 -z-20"></div>
    </>
  );
}
