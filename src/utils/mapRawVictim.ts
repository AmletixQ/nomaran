import { Victim } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapRawVictim(raw: any): Victim {
  return {
    id: raw.id,
    fullname: raw.fullname,
    birthPlace: raw.birth_place,
    birthYear: raw.birth_year,
    category: raw.category,
    otherData: raw.other_data,
    national: raw.national,
  };
}
