import Link from "next/link";
import { searchHref } from "@/utils/searchHref";
import { cn } from "@/utils/cn";

interface IPagination {
  query: string;
  filters: string[];
  page: number;
  totalPages: number;
}

const controlClassName =
  "hover:bg-gray/50 rounded border px-2 py-1 transition duration-150";

export default function Pagination({
  query,
  filters,
  totalPages,
  page,
}: IPagination) {
  const prevHref =
    page > 1 ? searchHref({ query, filters, page: page - 1 }) : null;
  const nextHref =
    page < totalPages ? searchHref({ query, filters, page: page + 1 }) : null;
  const lastHref =
    page !== totalPages ? searchHref({ query, filters, page: totalPages }) : null;

  return (
    <nav
      aria-label="Пагинация результатов поиска"
      className="border-gray mt-4 flex items-center justify-between gap-4 rounded-xl border p-4"
    >
      {prevHref ? (
        <Link href={prevHref} className={controlClassName}>
          Предыдущая
        </Link>
      ) : (
        <span className={cn(controlClassName, "bg-gray cursor-not-allowed")}>
          Предыдущая
        </span>
      )}
      <span>
        Страница {page} из{" "}
        {lastHref ? (
          <Link href={lastHref} className="cursor-pointer border-b">
            {totalPages}
          </Link>
        ) : (
          totalPages
        )}
      </span>
      {nextHref ? (
        <Link href={nextHref} className={controlClassName}>
          Следующая
        </Link>
      ) : (
        <span className={cn(controlClassName, "bg-gray cursor-none")}>
          Следующая
        </span>
      )}
    </nav>
  );
}
