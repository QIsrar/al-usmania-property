"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSectors } from "@/data/properties";
import { PROPERTY_TYPE_LABELS, PRICE_RANGES, RENT_PRICE_RANGES } from "@/lib/constants";
import type { PropertyPurpose, PropertyType } from "@/types";

interface SearchBarProps {
  variant?: "hero" | "page";
}

export function SearchBar({ variant = "hero" }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectors = getSectors();

  const [purpose, setPurpose] = useState<string>(
    searchParams.get("purpose") || "all"
  );
  const [type, setType] = useState<string>(
    searchParams.get("type") || "all"
  );
  const [sector, setSector] = useState<string>(
    searchParams.get("sector") || ""
  );
  const [priceRange, setPriceRange] = useState<string>(
    searchParams.get("price") || "0"
  );

  const currentPriceRanges = purpose === "rent" ? RENT_PRICE_RANGES : PRICE_RANGES;

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (purpose !== "all") params.set("purpose", purpose);
    if (type !== "all") params.set("type", type);
    if (sector) params.set("sector", sector);
    if (priceRange !== "0") params.set("price", priceRange);
    router.push(`/properties?${params.toString()}`);
  };

  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 border border-stone-200/50"
          : "bg-white rounded-xl shadow-sm p-4 border border-stone-200"
      }
    >
      {/* Purpose Toggle */}
      <div className="flex gap-2 mb-4">
        {[
          { value: "all", label: "All" },
          { value: "sale", label: "Buy" },
          { value: "rent", label: "Rent" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setPurpose(option.value)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              purpose === option.value
                ? "bg-brand-500 text-white shadow-sm"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Property Type */}
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1.5">
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2.5 bg-stone-50 border-2 border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          >
            <option value="all">All Types</option>
            {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Area/Sector */}
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1.5">
            Area / Sector
          </label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full px-3 py-2.5 bg-stone-50 border-2 border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          >
            <option value="">All Areas</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1.5">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-3 py-2.5 bg-stone-50 border-2 border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          >
            {currentPriceRanges.map((range, i) => (
              <option key={i} value={i.toString()}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full px-6 py-2.5 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
