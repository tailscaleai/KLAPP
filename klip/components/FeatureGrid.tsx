'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '📤',
    title: 'Easy Upload',
    description: 'Upload videos or paste YouTube URLs directly',
  },
  {
    icon: '🤖',
    title: 'Scene Detection',
    description: 'AI automatically finds the most engaging moments',
  },
  {
    icon: '📝',
    title: 'Auto Captions',
    description: 'Speech-to-text with customizable styling',
  },
  {
    icon: '📱',
    title: 'Vertical Reframe',
    description: 'Smart crop to 9:16 for mobile optimization',
  },
  {
    icon: '✨',
    title: 'Animations',
    description: 'Smooth fade-in/out caption animations',
  },
  {
    icon: '💾',
    title: 'Multi-Export',
    description: 'Download as MP4, WebM, or share directly',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Powerful Features
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Everything you need to create viral short-form content
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
