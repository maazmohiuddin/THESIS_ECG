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
            }}
            className="w-full mt-10 p-6 sm:p-8 lg:p-10 md:pb-28 lg:pb-28 rounded-xl shadow-lg flex-1 box-border bg-cover bg-center"
        >
            <div className="flex flex-row gap-2 items-start">
                <BaseImage
                    src="/images/uploadicon.png"
                    height={10}
                    width={50}
                    alt="Upload Image"
                    className="w-10 sm:w-12 lg:w-16"
                />
                <div>
                    <Heading
                        level={5}
                        className="whitespace-normal text-white text-base sm:text-lg lg:text-xl font-medium">
                        Analyzed Results</Heading>
                    <p className="text-gray-400 text-sm sm:text-base">The results fetched from the model</p>
                </div>
            </div>
            <div className="border-b border-gray-300 w-full pb-4"></div>
            <div className="space-y-4 mt-8">
                <Heading
                    level={5}
                    className="whitespace-normal text-white text-sm sm:text-lg lg:text-xl font-medium flex justify-between"
                >
                    Heart Rating <span>7.5/10</span>
                </Heading>
                <Heading
                    level={5}
                    className="whitespace-normal text-white text-sm sm:text-lg lg:text-xl font-medium flex justify-between"
                >
                    Average Heart Rate <span>(bpm)</span>
                </Heading>
                <Heading
                    level={5}
                    className="whitespace-normal text-white text-sm sm:text-lg lg:text-xl font-medium flex justify-between"
                >
                    Key Findings <span></span>
                </Heading>
                <Heading
                    level={5}
                    className="whitespace-normal text-white text-sm sm:text-lg lg:text-xl font-medium flex justify-between"
                >
                    Graph View <span></span>
                </Heading>
                <Heading
                    level={5}
                    className="whitespace-normal text-white text-sm sm:text-lg lg:text-xl font-medium flex justify-between"
                >
                    Recommendations <span></span>
                </Heading>
            </div>
        </div>

    );
}
