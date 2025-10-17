"use client";
import { Victim } from "@prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import VictimList from "./VictimList";
import Up from "../icons/ShevronArrow";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ShevronArrow from "../icons/ShevronArrow";

interface IInfiniteVictimList {
  initialVictims: Victim[];
  query: string;
  filters: string[];
  initialPage: number;
  pageSize: number;
  total: number;
}

export default function InfiniteVictimList({
  filters,
  initialPage,
  initialVictims,
  pageSize,
  query,
  total,
}: IInfiniteVictimList) {
  const [victims, setVictims] = useState<Victim[]>(initialVictims);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPage * pageSize < total);
  const observeRef = useRef<HTMLDivElement | null>(null);

  const params = useSearchParams();

  useEffect(() => {
    setVictims(initialVictims);
    setCurrentPage(initialPage);
    setHasMore(initialPage * pageSize < total);
  }, [params, initialVictims, initialPage, pageSize, total]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const nextPage = currentPage + 1;
    const params = new URLSearchParams();

    if (query) params.set("query", query);
    filters.forEach((filter) => params.append("filter", filter));
    params.set("page", nextPage.toString());

    try {
      const response = await fetch(`/api/victims?${params.toString()}`);
      const data = await response.json();

      setVictims((prev) => [...prev, ...data.victims]);
      setCurrentPage(nextPage);
      setHasMore(nextPage * pageSize < data.total);
    } catch (error) {
      console.error("Error loading more victims:", error);
    } finally {
      setIsLoading(false);
    }
  }, [query, filters, currentPage, isLoading, hasMore, pageSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 },
    );

    const current = observeRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, isLoading, loadMore]);

  return (
    <div>
      {victims.length === 0 ? (
        <h2>Не найдено никаких записей...</h2>
      ) : (
        <>
          <VictimList victims={victims} />
          {hasMore && (
            <div ref={observeRef} className="pt-5">
              {isLoading && <h3>Загрузка...</h3>}
            </div>
          )}

          <ShevronArrow href="#top" />
        </>
      )}
    </div>
  );
}
