'use client'

import { ArrowLeft, ShieldCheck, Lock, EyeOff, Settings } from 'lucide-react'
import Link from 'next/link'

export default function SecurityPage() {
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

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-[#6D5BA8]" />
          <h1 className="text-4xl font-bold text-[#6D5BA8]">Your Security & Privacy</h1>
        </div>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-10">
          We take your privacy seriously. Our platform is designed to protect your data using advanced security standards. Here's how we ensure your content stays secure, private, and in your control.
        </p>

    {/* 🔒 Data Encryption */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">🔒 End-to-End Encryption</h2>
  <p className="text-gray-800">
    We use industry-leading encryption protocols to keep your information safe. From the moment you input data to when it’s stored or processed, ensuring no one else can access your content.
  </p>
</section>


        {/* 🕶️ Privacy by Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">🕶️ Privacy by Design</h2>
          <p className="text-gray-800">
            We don’t store or share your content unless you choose to save it. No third-party access, no data sales, no hidden tricks — just transparency.
          </p>
        </section>

    

        {/* 🔐 Secure Infrastructure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">🔐 Secure Infrastructure</h2>
          <p className="text-gray-800">
            Our systems are hosted on secure, trusted cloud platforms with constant monitoring and multi-layer protection against unauthorized access.
          </p>
        </section>

        {/* 👁️ Transparent Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#5A4B91]">👁️ Transparent Policies</h2>
          <p className="text-gray-800">
            We comply with global privacy regulations and provide a clear <Link href="/privacy-policy" className="underline text-[#6D5BA8] hover:text-[#4B3F72]">Privacy Policy</Link> that explains exactly how your data is handled.
          </p>
        </section>

      
      </div>
    </main>
  )
}
