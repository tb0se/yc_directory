import React from 'react';
import { redirect } from 'next/navigation';

import StartupForm from '@/components/StartupForm';
import { auth } from '@/auth'

export default async function Page() {
    const session = await auth();

    if (!session) redirect('/');

    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <h1 className='heading'>Submit your Startup</h1>
            </section>

            <StartupForm />
        </>
    )
}
