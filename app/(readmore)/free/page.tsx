'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function FreePage() {
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

        <h1 className="text-4xl font-bold mb-6 text-[#6D5BA8]">💸 Free to Use</h1>
        <p className="text-lg text-gray-700 mb-10">
          Our platform is 100% free and always will be. We believe in democratizing AI-powered content creation, so
          everyone can create, share, and grow — without the burden of subscription costs.
        </p>

        {/* 💡 Why Free? */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">💡 Why Free?</h2>
          <p className="text-gray-800">
            Our mission is to provide accessible tools for students, creators, marketers, and developers alike.
            We’re focused on empowering innovation — not locking it behind a paywall.
          </p>
        </section>

        {/* ✅ What You Get */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">✅ What You Get</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>Unlimited Access</strong> – Use all AI templates without restrictions.</li>
            <li><strong>No Subscriptions</strong> – No sign-ups, trials, or payment info required.</li>
            <li><strong>Instant Usage</strong> – Start generating content in seconds.</li>
            <li><strong>No Ads or Distractions</strong> – Just a clean, focused user experience.</li>
          </ul>
        </section>

        {/* 🎯 Who Is It For? */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">🎯 Who Is It For?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>📚 Students working on assignments and projects.</li>
            <li>💼 Freelancers and professionals building online presence.</li>
            <li>📱 Social media creators who want engaging posts fast.</li>
            <li>💻 Developers who want quick code generation tools.</li>
          </ul>
        </section>

        {/* ❤️ Our Promise */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">❤️ Our Promise</h2>
          <p className="text-gray-800">
            We’re here to support your growth and creativity. As we grow, our core tools will always remain free — with optional upgrades for power users in the future.
          </p>
        </section>
      </div>
    </main>
  )
}
