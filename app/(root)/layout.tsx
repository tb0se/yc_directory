import React from 'react';
import Navbar from '@/components/Navbar';

type LayoutProps = Readonly<{
    children: React.ReactNode;
}>

export default function Layout({ children }: LayoutProps) {
    return (
        <main className='font-work-sanes'>
            <Navbar />
            {children}
        </main>
    )
}
