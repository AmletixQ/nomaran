export default function getSearchParams(url: string) {
  const { searchParams } = new URL(url);
  const query = searchParams.get("query") || "";
  const filter = searchParams.getAll("filter");
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = 15;

  return { query, filter, page, pageSize };
}
