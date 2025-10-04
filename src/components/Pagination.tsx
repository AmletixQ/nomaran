"use client";
import { useRouter } from "next/navigation";

interface IPagination {
  query: string;
  filters: string[];
  page: number;
  totalPages: number;
}

export default function Pagination({
  query,
  filters,
  totalPages,
  page,
}: IPagination) {
  const router = useRouter();

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);

    filters.forEach((filter) => params.set("filter", filter));
    params.set("page", newPage.toString());

    router.push(`/?${params.toString()}#results`);
  };

  return (
    <div className="border-gray mt-4 flex justify-between items-center gap-4 rounded-xl border p-4">
      <button
        onClick={() => updatePage(page - 1)}
        disabled={page <= 1}
        className="hover:bg-gray/50 disabled:bg-gray cursor-pointer rounded border px-2 py-1 transition duration-150 disabled:cursor-not-allowed"
      >
        Предыдущая
      </button>
      <span className="border-b">
        Страница {page} из {totalPages}
      </span>
      <button
        onClick={() => updatePage(page + 1)}
        disabled={page >= totalPages}
        className="hover:bg-gray/50 disabled:bg-gray cursor-pointer rounded border px-2 py-1 transition duration-150 disabled:cursor-none"
      >
        Следующая
      </button>
    </div>
  );
}
