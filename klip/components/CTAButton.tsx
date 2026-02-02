import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

export default function CTAButton({ href, text }: Props) {
  return (
    <Link href={href} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition">
      {text}
    </Link>
  );
}
