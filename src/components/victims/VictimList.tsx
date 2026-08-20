import { Victim } from "@prisma/client";
import VictimRow from "./VictimRow";
import ShevronArrow from "../icons/ShevronArrow";

interface IVictimsProps {
  victims: Victim[];
  page: number;
  pageSize: number;
}

export default function VictimList({ victims, page, pageSize }: IVictimsProps) {
  return (
    <>
      <div className="flex flex-col gap-2.5 md:gap-5">
        <h6 className="text-[22px] font-bold">ФИО</h6>
        <ol className="flex list-none flex-col gap-5 text-[22px]">
          {victims.map((v, i) => (
            <VictimRow
              number={(page - 1) * pageSize + i + 1}
              key={v.id}
              {...v}
            />
          ))}
        </ol>
      </div>
      <div id="down" />
      <div className="fixed right-[3%] bottom-[3%]">
        <ShevronArrow href="#top" />
        <ShevronArrow href="#down" className="rotate-180" />
      </div>
    </>
  );
}
