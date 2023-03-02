import React from "react";

function Footer() {
    return (
        <footer className="flex flex-col lg:grid lg:grid-cols-5 w-full bg-black text-white px-10 py-5">
            <div>
                <h3 className="font-bold underline">The Farmer's Market</h3>
                <p>Questions</p>
                <p>Help</p>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-row flex-wrap space-x-3 font-bold underline">
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>
                <div className="font-thin">
                    Site design / logo © {new Date().getFullYear()} Curtis Hu
                    Labs Inc; MIT LICENSE
                </div>
            </div>
        </footer>
    );
}

export default Footer;