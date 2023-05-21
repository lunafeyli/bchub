'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const segments = useSelectedLayoutSegments();

  return (
    <div className='w-full h-full'><h1>TESTE</h1></div>
  )
}
