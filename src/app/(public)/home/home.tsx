"use client";
import React, { useState } from 'react';
import Header from '@/components/Base/Header';
import HomePage from '@/components/HomePage';

export default function Home() {
    const [isToggled, setIsToggled] = useState<boolean>(true);
    const [step, setStep] = useState(0);

    const nextStep = () => setStep((prev) => prev + 1);
    const handleApplyClick = () => {
        setIsToggled(false);
        setStep(0);
    };
    return (
        <div
            className='w-full overflow-y-scroll bg-cover bg-center h-screen flex flex-col justify-center p-5 sm:p-10'
            style={{
                backgroundImage: `url(images/bg-homepage.png)`,
                overflow: 'hidden',
                width: '100% !important',
                objectFit: 'contain',
            }}>
            <Header />
            <div>
                <HomePage handleToggle={handleApplyClick} />
            </div>
        </div>
    );
}
