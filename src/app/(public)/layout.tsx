import React from 'react';
import Header from '@/components/Base/Header';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className='bg-cover bg-center min-h-screen flex flex-col justify-center p-5 sm:p-10'
            style={{
                backgroundImage: `url(images/bg-homepage.png)`,
                overflow: 'hidden',
                width: '100% !important',
                objectFit: 'contain',
            }}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}
