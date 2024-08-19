'use client'

import Image from "next/image";
import Flow from "./lineage";

export default function Home() {
  return (
    <main className="flex h-screen flex-col p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lineage</h1>
      <Flow />
    </main>
  );
}
