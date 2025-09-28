import Link from "next/link";

export default function NavBar() {

    return (
        <div className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-10">
            <Link href="/">
                <div className="text-black font-bold text-xl">passordDocs</div>
            </Link>
            <div>
                <button className="px-4 py-2 text-black rounded-lg">Docs</button>
                <button className="ml-4 px-4 py-2 text-black rounded-lg">Security</button>
            </div>
        </div>
    );
}