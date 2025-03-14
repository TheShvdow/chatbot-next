"use client";
import ChatMessage from "@/components/ChatMessage";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-20 h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">
        Ai - With NextJs 15 by Deriss (@TheShvdow)
      </h1>
      <ChatMessage />
    </main>
  );
}
