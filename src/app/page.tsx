import Image from 'next/image'
import {Inter } from 'next/font/google';
// import styles from './page.moule.css';
import Paragraph from '../components/ui/Paragraph'

export default function Home() {
  return (
    <main className='bg-red-500'><Paragraph size='sm'>some text</Paragraph></main>
  )
}
