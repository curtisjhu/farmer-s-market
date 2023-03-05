import Link from "next/link";
import React, {
    createRef,
    FormEvent,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Post = {
    title: string;
    description: string;
    location: string;
    date: string;
    _id: {
        $oid: string;
    };
};

const textboxStyles =
    "my-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm";

function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState("");
    const ref = useRef<HTMLFormElement>(null);

    useEffect(() => {
        fetch("https://seashell-app-wzb8g.ondigitalocean.app/posts", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log(data);
            })
            .catch((err) => {
                setPosts([
                    {
                        _id: {
                            $oid: "",
                        },
                        title: "An error occurred",
                        description: "",
                        location: "",
                        date: "",
                    },
                ]);
            });
    }, []);

    function createNewPost(event: FormEvent) {
        event.preventDefault();

        if (!ref.current) return;

        const data = new FormData(ref.current); 
        fetch("https://seashell-app-wzb8g.ondigitalocean.app/posts", {
            method: "POST",
            body: data,
        }).then(() => location.reload()).catch((err) => setError(err.toString()));
    }

    function deletePost(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) {
        event.preventDefault();

        fetch("https://seashell-app-wzb8g.ondigitalocean.app/posts/" + id, {
            method: "DELETE",
        })
            .then(() => setPosts(posts.filter(curr => curr._id.$oid != id)))
            .catch((err) => setError(err.toString()));
    }

    return (
        <div className="w-full">
            <Header />

            <div className="w-full md:w-3/5 mx-auto">
                <div className="my-72 mx-2">
                    <div className="text-2xl font-semibold">
                        Let&apos;s see what your local farmers are selling...
                    </div>
                    <div>
                        {posts.length !== 0 ? (
                            posts.map((el) => (
                                <div
                                    className="flex flex-col my-3"
                                    key={el._id.$oid}
                                >
                                    <div className="font-bold">{el.title}</div>
                                    <div className="text-slate-500">
                                        {el.description}
                                    </div>
                                    <div className="text-sm font-light ml-10">
                                        Where: {el.location}
                                    </div>
                                    <div className="text-sm font-light ml-10">
                                        When: {el.date}
                                    </div>
                                    <button
                                        className="text-sm text-red-800 w-fit"
                                        onClick={(e) =>
                                            deletePost(e, el._id.$oid)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>

                <form
                    ref={ref}
                    onSubmit={(e) => createNewPost(e)}
                    className="my-8 w-1/2 flex flex-col outline-none "
                >
                    <div className="text-xl font-bold">Create a Post</div>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className={textboxStyles}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        className={textboxStyles}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        className={textboxStyles}
                    />
                    <input
                        type="text"
                        placeholder="Date"
                        name="date"
                        className={textboxStyles}
                    />
                    <input
                        type="submit"
                        className={
                            "bg-black text-white selection w-full rounded-md ring-1 shadow-sm appearance-none text-lg py-2 leading-6"
                        }
                    />
                </form>
                <div className="text-red">{error}</div>
            </div>

            <Footer />
        </div>
    );
}



export default memo(Home);
