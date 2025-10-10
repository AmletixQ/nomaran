import { Victim } from "@prisma/client";
import Link from "next/link";

type IVictimProps = Victim;

export default function VictimRow({
  id,
  birthPlace,
  birthYear,
  category,
  fullname,
}: IVictimProps) {
  const data: string[] = [];
  if (birthPlace) data.push(birthPlace);
  if (birthYear) data.push(birthYear.toString());

  return (
    <div key={id} className="border-gray flex gap-2.5 border-b-2 pb-1.5">
      <h6 className="text-[12px] font-normal">{id}.</h6>
      <div className="flex flex-col gap-1">
        <Link href={`victim/${id}`}>
          <h6 className="font-normal">{fullname}</h6>
        </Link>
        <p className="text-[10px] md:text-[16px]">
          {data.join(", ")}
          {data.length ? ", " : ""}
          {category === "DISPOSSESSED" ? "Раскулаченный" : "Репрессированный"}
        </p>
      </div>
    </div>
  );
}
