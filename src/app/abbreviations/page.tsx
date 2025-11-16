import { ABBREVIATIONS } from "@/constants/abbreviations";

export default function page() {
  return (
    <main className="flex flex-col gap-7.5 pt-40 md:pt-50 pb-25 2xl:mx-25 2xl:gap-15 2xl:py-80">
      <h2>Список аббревиатур</h2>
      <ul className="flex flex-col gap-5 2xl:gap-6">
        {ABBREVIATIONS.map((abbr, i) => (
          <p
            key={i}
            className="list-item list-none border-b border-black/20 pb-1.5 2xl:text-[22px]"
          >
            {abbr}
          </p>
        ))}
      </ul>
    </main>
  );
}
