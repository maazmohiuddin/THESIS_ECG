'use client';
import React, { useState } from 'react'
import HomePage from '@/components/HomePage'
import UploadImage from '@/components/UploadImage';

export default function page() {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep((prev) => prev + 1);
    const resetPage = () => {
        setStep(0);
    };
    return (
        <div className='w-full mt-32 md:mt-8'>
            {(() => {
                switch (step) {
                    case 0:
                        return <HomePage fn={nextStep} />;
                    case 1:
                        return <UploadImage />;
                    default:
                        return <HomePage fn={resetPage} />;
                }
            })()}
        </div>
    )
}
