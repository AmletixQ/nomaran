"use client";
import { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import { useSearchParams } from "next/navigation";

interface ICheckboxesProps {
  filters: string[];
}

const filterOptions = [
  {
    title:
      "Список репрессированных по политическим обвинениям — высшая мера наказания (расстрел)",
    id: "list-shooted",
    value: "list-of-shooted",
  },
  {
    title: 'Список репрессированных в ходе кампании по "раскулачиванию"',
    id: "list-of-dispossessed",
    value: "list-of-dispossessed",
  },
  {
    title: (
      <>
        Список репрессированных по политическим обвинениям — ИТЛ, тюремные
        заключения, ссылки
      </>
    ),
    id: "list-of-itl",
    value: "list-of-itl",
  },
  {
    title: "Список репрессированных по национальному признаку",
    id: "repressed-nat-attribute",
    value: "repressed-nat-attribute",
  },
  {
    title: "Общий список",
    id: "all",
    value: "all-list",
    className: "col-start-1 col-end-3 py-4!",
    defaultChecked: true,
  },
];

export default function Checkboxes({
  filters: initialFilters,
}: ICheckboxesProps) {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<string[]>(
    searchParams.getAll("filters"),
  );
  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const handleFilterChange = (value: string, checked: boolean) => {
    let newFiltres: string[];

    if (value == "all-list") {
      newFiltres = checked ? ["all-list"] : [];
    } else {
      newFiltres = checked
        ? [...filters.filter((f) => f !== "all-list"), value]
        : filters.filter((f) => f !== value && f !== "all-list");
    }

    setFilters(newFiltres);
  };

  return (
    <div className="flex grid-cols-2 flex-col gap-3 md:grid">
      {filterOptions.map((option) => (
        <Checkbox
          id={option.id}
          value={option.value}
          name="filter"
          key={option.id}
          className={option.className}
          checked={filters.includes(option.value)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFilterChange(option.value, e.target.checked)
          }
        >
          {option.title}
        </Checkbox>
      ))}
    </div>
  );
}
