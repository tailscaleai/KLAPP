import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import DemoSection from '@/components/DemoSection';
import FAQSection from '@/components/FAQSection';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureGrid />
      <DemoSection />
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-4xl font-bold mb-4">Ready to Create?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">Start creating viral shorts for free. No credit card required.</p>
        <CTAButton href="/editor" text="Get Started Free" />
      </section>
      <FAQSection />
    </main>
  );
}
