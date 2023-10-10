import React from "react";

import Background from "../Assets/image3.jpg";

function Home() {
  return (
    <main>
      <img
        src={Background}
        alt="Ii ndio picha yangu ya Background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8  ">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg: leading-snug home-name mt-[-200px] ">
          Hello I'M Mr. Beast
        </h1>
      </section>
    </main>
  );
}

export default Home;
