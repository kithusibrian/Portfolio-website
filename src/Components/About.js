import React, { useState, useEffect } from "react";
import Musembi from "../Assets/musembi.jpg";
import SanityBlockContent from "@sanity/block-content-to-react";
import createClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    createClient
      .fetch(
        '*[_type == "author"][0] { name, bio, "authorImage": image.asset->url }'
      )
      .then((data) => {
        console.log("About Data:", data);
        setAbout(data);
      })
      .catch(console.error);
  }, []);

  if (!about) return <div>Loading... Chill out!</div>;

  return (
    <main className="relative">
      <img src={Musembi} alt="Picha ya Musembi" className="absolute w-full" />
      <div className="pb-20 p-20 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          {about && about.authorImage && (
            <img
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
              src={urlFor(about.authorImage).url()}
              alt={about.name}
            />
          )}
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there MF!!! I'm{" "}
              <span className="text-green-100">{about.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <SanityBlockContent
                blocks={about.bio}
                projectId="10j7vps6"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
