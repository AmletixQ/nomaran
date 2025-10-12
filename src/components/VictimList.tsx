import { Victim } from "@prisma/client";
import VictimRow from "./VictimRow";

interface IVictimsProps {
  victims?: Victim[];
}

export default function VictimList({ victims }: IVictimsProps) {
  return victims && victims.length > 0 ? (
    <div className="flex flex-col gap-7.5 md:gap-10">
      <h6 className="text-[22px] font-bold">ФИО</h6>
      <ol className="flex list-inside list-decimal flex-col gap-5 text-[22px]">
        {victims.map((v, i) => (
          <VictimRow number={i + 1} key={v.id} {...v} />
        ))}
      </ol>
    </div>
  ) : (
    <h2>Не найдено никаких записей...</h2>
  );
}
