import React from "react";
import { useState, useEffect } from "react";

import createClient from "../client";
import { Link } from "react-router-dom";

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    createClient
      .fetch(
        `* [_type == "post"]{
      title,
      slug,
      mainImage{
        asset ->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container-mx-auto">
        <h1 text-5xl flex justify-center cursive>
          Blog Post Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome To My Blog Posts Page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block relative h-64 rounded shadow leading-snug bg-white border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-4 flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
