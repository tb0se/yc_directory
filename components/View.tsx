import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEW_QUERY } from '@/sanity/lib/queries'
import { viewsText } from '@/lib/utils'
import { writeClient } from '@/sanity/lib/write-client'
import { after } from 'next/server';

type ViewProps = Readonly<{
    id: string
}>;

export default async function View({ id }: ViewProps) {

    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEW_QUERY, { id });

    after(
        async () => await writeClient.patch(id).set({ views: totalViews + 1 }).commit()
    );

    return (
        <div className='view-container'>
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>
            <p className='view-text'>
                <span className='font-black'>{`${totalViews} ${viewsText(totalViews)}`}</span>
            </p>
        </div>
    )
}
