
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>dtdddd</h1>
//     </div>
//   );
// }
// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   const features = [
//     {
//       title: "25+ templates",
//       description: "Responsive, and mobile-first project on the web",
//       link: "/temp",
//     },
//     {
//       title: "Customizable",
//       description: "Components are easily customized and extendable",
//       link: "/customizable",
//     },
//     {
//       title: "Free to Use",
//       description: "Every component and plugin is well documented",
//       link: "/free",
//     },
//     {
//       title: "24/7 Support",
//       description: "Contact us 24 hours a day, 7 days a week",
//       link: "/support",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-6 py-4 border-b">
//         <div className="flex justify-center">
//           <Image src="/logo.svg" alt="logo" width={60} height={60} />
//         </div>
//         <Link href="/sign-in?redirect_url=/dashboard">
//   <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">
//     Get Started
//   </button>
// </Link>
//       </header>

//       {/* Hero Section */}
//       <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-gray-100">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           AI Content <span className="text-indigo-600">Generator</span>
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
//           Revolutionize your content creation with our AI-powered app, delivering
//           engaging and high-quality text in seconds.
//         </p>
//         <Link href="/sign-in?redirect_url=/dashboard">
//   <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300">
//     Get started →
//   </button>
// </Link>

//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//               <Link href={feature.link} className="text-indigo-600 mt-4 inline-block">
//                 Learn more →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  Sliders,
} from "lucide-react"; // Lucide icons

export default function Home() {
  const features = [
    {
      title: "15+ Templates",
      description: "Instantly generate content using clean and optimized templates.",
      icon: FileText,
      link: "/temp",
    },
    {
      title: "Secure & Private",
      description: "Your data stays encrypted and safe — we value your privacy.",
      icon: ShieldCheck,
      link: "/security",
    },
    {
      title: "Free to Use",
      description: "Completely free with no hidden fees or subscriptions.",
      icon: BadgeDollarSign,
      link: "/free",
    },
    {
      title: "Smart Formatter",
      description: "Effortlessly apply bold, italics, and formatting styles to your content.",
      icon: Sliders,
      link: "/formatter",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d2cff0] via-[#dcdaff] to-[#d2cff0] text-[#2E2E3A] font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/logo.svg" alt="logo" width={40} height={40} />
          <span className="text-xl font-bold text-[#4B3F72]">GenAI Hub</span>
        </motion.div>
        <Link href="/sign-in?redirect_url=/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#6D5BA8] hover:bg-[#5A4B91] text-white px-5 py-2 rounded-full font-semibold shadow-lg"
          >
            Get Started
          </motion.button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="py-28 text-center relative overflow-hidden">
        <motion.div
          className="relative z-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#2E2E3A]">
            AI-Powered Content<br />
            <span className="text-[#4B3F72]">That Works for You</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#4B3F72] mb-10">
          Turn ideas into polished content fast — using intelligent templates that adapt to your goals.
          </p>
          <Link href="/sign-in?redirect_url=/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#6D5BA8] hover:bg-[#5A4B91] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-transform"
            >
              Try It Now →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-[#2E2E3A] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-[#4B3F72] max-w-xl mx-auto">
            A simple, smart, and scalable way to automate your content strategy.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#6D5BA8] hover:bg-[#634fa7] p-6 rounded-3xl shadow-md text-center transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-12 h-12 mx-auto mb-5 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#ded8e0] text-sm mb-4">{feature.description}</p>
                <Link href={feature.link}>
                  <span className="text-[#e5e5e5] font-medium hover:underline transition">Learn more →</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
