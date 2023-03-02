import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Post = {
  image_src: string;
  image_alt?: string;
  description: string;
  price: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setPosts([]);
  })

    return (
      <div className="w-full">
      <Header />

      <div className="my-72 mx-2">
        <div className="text-2xl font-semibold">Let's see what your local farmers are selling...</div>
        <div>
          {posts.map(el => (
            <div>

            </div>
          ))

          }
        </div>
      </div>

      <Footer />
  </div>
    );
}
