"use client";

import { useState } from "react";
import Image from "next/image";

function Counter ( {refr, service, doc1, doc2} ) {
    const [showPassword, setShowPassword] = useState(false);
    const [hover, setHover] = useState(false);

    let passwordDisplay = "xxxxxxxxxxxxx"

    return (
        <div className="flex items-center">

        {/* Email column */}
        <div className="w-80 flex items-center">
            <div className="flex justify-center items-center p-1 mx-2 rounded-2xl bg-gray-100 transition-all duration-200"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} >
                <div className="flex items-center w-7 overflow-hidden bg-gray-100 rounded-2xl transition-all duration-200 hover:w-20">
                <Image src={refr} alt="gmail" width={20} height={20} className="ml-1" />
                <span className={`ml-2 text-sm text-gray-500 whitespace-nowrap transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
                    {service}
                </span>
                </div>
            </div>
            
            <h1>{doc1}</h1>
        </div>

        {/* Password column */}
        <div className="w-80">
            <h1 className="text-gray-300"> {showPassword ? doc2 : passwordDisplay} </h1>
        </div>

        {/* Button column */}
        <div className="w-20">
            <button 
            onClick={() => setShowPassword(!showPassword)}
             className="bg-gray-300 hover:bg-gray-400 text-gray-100 px-2 rounded-2xl font-bold transition-all duration-200">
            show
            </button>
        </div>
        </div>
    );
}

export default Counter;