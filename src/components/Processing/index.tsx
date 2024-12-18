"use client";
import React from "react";
import Heading from "../Base/Heading";
import BaseImage from "../Base/BaseImage";

const Processing = () => {
    return (
        <div className="flex flex-col w-full h-full justify-center">
            <div
                style={{
                    backgroundImage: `url(images/processbg.png)`,
                    objectFit: 'contain',
                }}
                className="border border-gray-50 mt-10 p-5 rounded-xl shadow-lg flex-1 flex justify-center items-center"
            >
                <div className="w-full p-4 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <BaseImage
                            src='/images/hearth.png'
                            height={100}
                            width={150}
                            alt="Hearth"
                        />
                        <Heading level={2} className="text-3xl font-normal">Processing...</Heading>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Processing;
