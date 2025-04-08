'use client'

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Temp() {
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

        <h1 className="text-4xl font-bold mb-6 text-[#6D5BA8]">Explore All 25+ AI Templates</h1>
        <p className="text-lg text-gray-700 mb-10">
          Our AI Content Generator App is loaded with over 25 powerful and intelligent templates tailored to meet
          your blogging, video, and social media needs. Whether you're looking to generate content, improve grammar,
          or optimize SEO — we’ve got you covered.
        </p>

        {/* Blog & Article Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">📝 Blog & Article Writing Tools</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>Blog Title Generator</strong> – Instantly craft catchy blog titles based on your topic.</li>
            <li><strong>Blog Content Creator</strong> – Generate engaging blog posts with just a few inputs.</li>
            <li><strong>Blog Topic Ideas</strong> – Get endless suggestions for trending or niche blog topics.</li>
            <li><strong>Rewrite Article</strong> – Rephrase your content to avoid plagiarism and improve clarity.</li>
            <li><strong>Text Improver</strong> – Eliminate redundancy, polish writing, and make content clearer.</li>
            <li><strong>Grammar Checker</strong> – AI-powered grammar and spelling correction.</li>
          </ul>
        </section>

        {/* YouTube Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">📺 YouTube Tools</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>YouTube Description Generator</strong> – AI-generated, keyword-rich video descriptions.</li>
            <li><strong>YouTube SEO Title</strong> – Create compelling titles to boost search visibility.</li>
            <li><strong>YouTube Tags</strong> – Get relevant tag suggestions to reach your audience.</li>
          </ul>
        </section>

        {/* Social Media Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">📱 Social Media Tools</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>Instagram Post Generator</strong> – AI-crafted captions for your posts.</li>
            <li><strong>Instagram Hashtag Generator</strong> – Find viral and niche hashtags for better reach.</li>
            <li><strong>Add Emojis to Text</strong> – Make your content more expressive with the right emojis.</li>
          </ul>
        </section>

        {/* Developer Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">💻 Developer Tools</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>Write Code</strong> – Generate production-ready code snippets in multiple languages.</li>
            <li><strong>Explain Code</strong> – Understand complex code logic with natural language explanations.</li>
          </ul>
        </section>

        {/* Why Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">🎯 Why Use Our Templates?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>🚀 Boost content creation speed up to 10x.</li>
            <li>✅ Improve content quality with AI refinement.</li>
            <li>📱 Fully responsive, modern design.</li>
            <li>🔧 Easy to customize and extend.</li>
            <li>💡 Perfect for creators, developers, and marketers.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
