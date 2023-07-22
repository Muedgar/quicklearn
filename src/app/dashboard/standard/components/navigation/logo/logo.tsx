'use client'

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <>
        <Link href="/" id="from_company_to_home" />
                <Image
                    className="cursor-pointer mr-4"
                    onClick={() => {
                        // if(document.getElementById("from_company_to_home")) {
                        //     document.getElementById("from_company_to_home")?.click();
                        // }
                        
                    }}
                    
                    width={300}
                    height={100}
                    src="/quicklearn.png"
                    alt="quick learn" />
        </>
    )
}