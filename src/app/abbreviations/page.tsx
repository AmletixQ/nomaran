import { ABBREVIATIONS } from "@/constants/abbreviations";

export default function page() {
  return (
    <main className="flex flex-col gap-15 py-25">
      <h2>Список аббревиатур</h2>
      <ul className="flex flex-col gap-6">
        {ABBREVIATIONS.map((abbr, i) => (
          <p
            key={i}
            className="list-item list-none border-b border-black/20 pb-1.5 text-[22px]"
          >
            {abbr}
          </p>
        ))}
      </ul>
    </main>
  );
}
