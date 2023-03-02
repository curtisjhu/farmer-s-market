import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="w-full bg-black flex">
            <div className="w-4/5 max-w-screen-lg mx-auto  my-3 flex flex-row flex-wrap justify-between text-white font-mono items-center">
                <div>
                    <Link href="/" className="flex flex-row items-center">
						<div className="font-extrabold text-2xl">
                        	The Farmer's Market
						</div>
                    </Link>
					<div className="flex flex-row space-x-3 text-slate-300">
						What's your neighbor growing?
					</div>
                </div>
            </div>
        </div>
    );
};

export default Header;