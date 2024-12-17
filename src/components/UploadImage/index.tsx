"use client";
import React, { useState } from "react";
import UploadImageleft from "../UploadImageleft";
import Processing from "../Processing";
import AnalyzedResults from "../AnalyzedResults";

const UploadImage = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <div className="col-span-1"><UploadImageleft /></div>
            <div className="col-span-1"><Processing /></div>
        </div>
    );
};

export default UploadImage;
