"use client";
import React, { useState } from "react";
import UploadImageleft from "../UploadImageleft";
import Processing from "../Processing";
import AnalyzedResults from "../AnalyzedResults";

const UploadImage: React.FC = () => {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(1);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full mt-20 overflow-x-hidden overflow-y-auto">
            <div className="col-span-1"><UploadImageleft processNext={nextStep} cancelFn={() => setStep(0)} /></div>
            <div className="col-span-1">
                {step == 0 ? <Processing /> : step == 1 ? <AnalyzedResults /> : null}
            </div>
        </div>
    );
};

export default UploadImage;
