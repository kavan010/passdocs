import Image from 'next/image';
import Navbar from '@/components/Navbar';
import SignInGoogle from '@/components/sign-in';

export default function Auth() {


    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Navbar />
            <div id="signin-card" className="w-72 h-96 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center space-y-6">
                <h1>Sign In</h1>
                <input type="text" placeholder="Email" className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                <button className="w-64 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200">Sign In</button>
                
                <SignInGoogle />

                <p className="text-sm text-gray-500">Don't have an account? <a href="/auth/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
            </div>
        </div>
    );
}