import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Post = {
    title: string;
    description: string;
    location: string;
    date: string;
};

const textboxStyles = "my-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://seashell-app-wzb8g.ondigitalocean.app/", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => {
                setPosts([
                    {
                        title: "An error occurred",
                        description: "",
                        location: "",
                        date: "",
                    },
                ]);
            });
    });

    function createNewPost(event: FormEvent) {
        event.preventDefault();
        console.log(event.target);
        // fetch("https://seashell-app-wzb8g.ondigitalocean.app/", {
        //     method: "POST",
        //     body: JSON.stringify(params)            
        // }).catch(err => setError(err.toString()))
    }

    return (
        <div className="w-full">
            <Header />

            <div className="w-full md:w-4/5 mx-auto">
                <div className="my-72 mx-2">
                    <div className="text-2xl font-semibold">
                        Let's see what your local farmers are selling...
                    </div>
                    <div>
                        {posts.length !== 0 ? (
                            posts.map((el) => (
                                <div className="flex flex-col">
                                    <div className="font-bold">{el.title}</div>
                                    <div className="text-slate-600">
                                        {el.description}
                                    </div>
                                    <div className="text-sm">{el.location}</div>
                                    <div className="text-sm">{el.date}</div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>

                <form
                    onSubmit={(e) => createNewPost(e)}
                    className="my-8 w-1/2 flex flex-col outline-none "
                >
                    <div className="text-xl font-bold">Create a Post</div>
                    <input type="text" placeholder="Title" className={textboxStyles} />
                    <input type="text" placeholder="Description" className={textboxStyles} />
                    <input type="text" placeholder="Location" className={textboxStyles} />
                    <input type="text" placeholder="Date" className={textboxStyles} />
                    <input type="submit" className={"bg-black text-white selection w-full rounded-md ring-1 shadow-sm appearance-none text-lg py-2 leading-6"} />
                </form>
                <div className="text-red">
                    {error}
                </div>
            </div>

            <Footer />
        </div>
    );
}
