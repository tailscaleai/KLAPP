'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Create Viral Shorts in Seconds
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Convert long-form videos into TikTok-ready clips with AI-powered scene detection and captions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/editor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-lg transition"
          >
            Learn More
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mt-8">✨ 100% Free • No Credit Card • Open Source</p>
      </motion.div>
    </section>
  );
}
