import Image from "next/image";
import Link from "next/link";

import PassDoc from "@/components/Password";
import Navbar from "@/components/Navbar";

export default function Home() {

    return (
        <div className="w-full h-full ">
            <Navbar />
            <header className="flex justify-center mt-60 flex-col items-center ">
                <h1 className="text-6xl font-mono font-bold bg-gradient-to-t from-gray-500 to-gray-900 text-transparent bg-clip-text">Secure Password Saver</h1>
                
                <div id="shadowcase" className="flex flex-col space-y-4 w-3xl h-50 mt-4 p-4 bg-gradient-to-t from-gray-0 to-gray-50 rounded-2xl shadow-lg text-gray-500">
                    <PassDoc refr="/gmail.png" service="gmail" doc1="kavangill75@gmail.com" doc2="SGKisTheGoat"/>
                    <PassDoc refr="/paypal.png" service="paypal" doc1="kavangill15@gmail.com" doc2="ChaiIsGay"/>
                    <PassDoc refr="/netflix.png" service="netflix" doc1="kavangill0517@gmail.com" doc2="SVKisTheGoat"/>
                    <PassDoc refr="/amazon.png" service="amazon" doc1="kavan010@gmail.com" doc2="SVKisTheGoat"/>
                    
                </div>

                <div className="mt-4">
                    <Link href="../api/auth/signup">
                        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-all duration-200">Sign Up</button>
                    </Link>
                    <Link href="../api/auth/signin">
                        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-all duration-200">Sign In</button>
                    </Link>
                </div>

            </header>
            
        </div>
    );
}