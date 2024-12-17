"use client";
import React from 'react';
import BaseImage from '../Base/BaseImage';
import Heading from '../Base/Heading';

export default function AnalyzedResults() {
    return (
        <div
            style={{
                backgroundImage: `url(images/processbg.png)`,
                objectFit: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100% !important',
            }}
            className="border-none w-full mt-10 p-5 rounded-xl shadow-lg flex-1 box-border"
        >
            <div className='flex flex-col gap-2'>
                <BaseImage
                    src='/images/uploadicon.png'
                    height={10}
                    width={50}
                    alt="Upload Image"
                />
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium mb-2">Analyzed Results</Heading>
                <p className="text-gray-400 text-sm mb-4">The results fetched from the model</p>
            </div>
            <div className='border-b border-gray-300 w-[56%] pb-4'>
            </div>
            <div className="space-y-4 mt-8">
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium">Heart Rating  <span>7.5/10</span></Heading>
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium">Average heart rate  <span>(bpm)</span></Heading>
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium">Key Findings  <span></span></Heading>
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium">Graph View  <span></span></Heading>
                <Heading level={5} className="whitespace-normal text-white text-lg font-medium">Recommendations  <span></span></Heading>
            </div>
        </div>
    );
}
