import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from './page.moule.css';
import Paragraph from '../components/ui/Paragraph';
import { Metadata } from 'next';
import LargeHeading from '@/components/ui/LargeHeading';

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Fee & open-source text similarity API',
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          ></LargeHeading>
        </div>
      </div>
    </div>
  );
}
