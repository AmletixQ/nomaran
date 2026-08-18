export function searchHref({
  query,
  filters,
  page,
}: {
  query: string;
  filters: string[];
  page?: number;
}) {
  const params = new URLSearchParams();

  if (query) params.set("query", query);

  filters
    .filter((filter) => filter && filter !== "all" && filter !== "all-list")
    .forEach((filter) => params.append("filter", filter));

  if (page && page > 1) params.set("page", String(page));

  const qs = params.toString();
  return qs ? `/search?${qs}#results` : "/search#results";
}

export function hasSearchIndexParams({
  query,
  filters,
  page,
}: {
  query?: string | string[];
  filters?: string | string[];
  page?: string | string[];
}) {
  const queryValue = typeof query === "string" ? query : "";
  const filterValues = Array.isArray(filters)
    ? filters
    : filters
      ? [filters]
      : [];
  const pageValue = Math.max(1, Number(page) || 1);

  return Boolean(queryValue) || filterValues.length > 0 || pageValue > 1;
}
