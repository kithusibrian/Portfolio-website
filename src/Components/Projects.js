import { useState, useEffect } from "react";

import createClient from "../client";

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    createClient
      .fetch(
        `* [_type == "project"]{
      title,
      description,
      date,
      place,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container-mx-auto">
        <h1 className="text-5xl flex justify-center cursive pb-4">
          Projects Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome To My Blog Projects Page MotherFucker
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-cyan-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-cyan-400 text-xl"
                  >
                    {" "}
                    View my Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
