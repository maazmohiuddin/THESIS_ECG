import React from 'react';
import Heading from '@/components/Base/Heading';
import Container from '@/components/Base/Container';
import BaseImage from '@/components/Base/BaseImage';
import Link from 'next/link';

interface Prop {
    handleToggle: () => void;
}
export default function HomePage({ handleToggle }: Prop) {
    return (
        <div className='w-full'>
            <div className='px-4 flex-grow flex flex-col justify-center items-center'>
                <Container className='w-full flex flex-col items-center justify-center text-center'>
                    <div className='flex flex-col items-center justify-center text-center gap-2'>
                        <Link href="#">
                            <BaseImage
                                src="/images/tag.png"
                                height={300}
                                width={300}
                                alt='Tag'
                                style={{ objectFit: 'contain' }}
                                className='mb-7'
                            />
                        </Link>
                        <Heading level={1} className='text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>
                            Analyze Your ECG Instantly
                        </Heading>
                        <p className='text-white text-lg mb-6 font-normal'>
                            Upload your ECG image, crop it, and let our AI-powered tool analyze your heartbeat. <br />
                            Get a detailed report with a heart rating out of 10 and take charge of your heart health today.
                        </p>
                    </div>
                    <div className='gap-4'>
                        <button
                            className='bg-whitebutton text-black px-4 py-2 rounded-md'
                            onClick={handleToggle}
                        >
                            Get Started
                        </button>
                        <button className='bg-transparent border-none text-white px-4 py-2 rounded-md'>
                            Read Documentation
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    );
}
