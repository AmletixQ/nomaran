import { Victim } from "@prisma/client";
import VictimRow from "./VictimRow";

interface IVictimsProps {
  victims: Victim[];
}

export default function VictimList({ victims }: IVictimsProps) {
  return victims && victims.length > 0 ? (
    <div className="flex flex-col gap-10">
      <h6>ФИО</h6>
      <ol className="flex list-inside list-decimal flex-col gap-5 text-[22px]">
        {victims.map((v) => (
          <VictimRow key={v.id} {...v} />
        ))}
      </ol>
    </div>
  ) : (
    <h2>Не найдено никаких записей...</h2>
  );
}
