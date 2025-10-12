import { getCachedVictims } from "@/utils/getCachedVictims";
import getSearchParams from "@/utils/getSearchParams";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { filter, page, pageSize, query } = getSearchParams(request.url);

  const res = await getCachedVictims(query, filter, page, pageSize);

  return NextResponse.json({
    victims: res?.victims,
    total: res?.total,
    page,
    pageSize,
  });
}
