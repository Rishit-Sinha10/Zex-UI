"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/images/logo.svg";

export function Navbar() {
  const [search, setSearch] = useState("");
  const [isOn, setIsOn] = useState("");

  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          className="flex shrink-0 items-center gap-3"
          href="/"
          aria-label="Zexui home"
        >
          <Image src={Logo} alt="" width={32} height={32} priority />
          <span className="text-lg font-semibold text-zinc-950">Zexui</span>
        </a>
        <label className="ml-auto flex w-full max-w-xs items-center rounded-md border border-zinc-300 bg-zinc-50 px-3 focus-within:border-zinc-950 focus-within:ring-1 focus-within:ring-zinc-950">
          <span className="sr-only">Search</span>
          <input
            className="w-full bg-transparent py-2 text-sm text-zinc-950 outline-none placeholder:text-zinc-500"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
          />
        </label>
        <button
          onClick={() => setIsOn(!isOn)}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            isOn
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </nav>
    </header>
  );
}

export const bar = Navbar;
export default Navbar;
