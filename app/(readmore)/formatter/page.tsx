"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FormatterPage() {
  return (
    <main className="min-h-screen bg-[#f4f1fb] text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <button className="mb-6 flex items-center gap-2 text-[#6D5BA8] hover:text-[#4B3F72] font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-[#6D5BA8]">
          ✨ Smart Formatter
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Elevate your content’s appearance with our Smart Formatter. Apply rich
          formatting like <strong>bold</strong>,<em> italics</em>, underlines,
          bullet points, and more — all with a single click or automatic
          suggestions.
        </p>

        {/*  Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">
            🎨 Formatting Features
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>
              <strong>Bold & Italics</strong> – Highlight key points and
              emphasize text effortlessly.
            </li>
            <li>
              <strong>Underline & Strike-through</strong> – Make your content
              more expressive and organized.
            </li>
            <li>
              <strong>Bullet Lists</strong> – Auto-convert text to clean,
              readable bullet or numbered lists.
            </li>
          </ul>
        </section>

        {/*  How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">
            ⚙️ How It Works
          </h2>
          <p className="text-gray-800">
            Our formatter let you manually select the formatting you want — all
            while preserving readability and layout.
          </p>
        </section>

        {/*  Who Should Use It */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">
            👥 Who Should Use It?
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>📝 Writers and bloggers polishing their posts.</li>
            <li>📢 Marketers creating branded content.</li>
            <li>💻 Developers documenting with styled code blocks.</li>
          </ul>
        </section>

        {/*  Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">
            🚀 Benefits
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>
              🧠Easily customize content to match your unique style and needs.
            </li>
            <li>📚 Keeps your content readable and well-structured.</li>
            <li>🎯 Ensures consistent tone and presentation.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
