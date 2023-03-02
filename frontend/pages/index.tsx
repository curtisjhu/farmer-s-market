import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Post = {
    title: string;
    description: string;
    location: string;
    date: string;
};

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {});

    function createNewPost() {
        fetch("", {});
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
                    onSubmit={createNewPost}
                    className="my-8 w-1/2 flex flex-col outline-none"
                >
                    <div className="text-xl font-bold">Create a Post</div>
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Description" />
                    <input type="text" placeholder="Location" />
                    <input type="text" placeholder="Date" />
                    <input type="submit" className="bg-black text-white" />
                </form>
            </div>

            <Footer />
        </div>
    );
}
