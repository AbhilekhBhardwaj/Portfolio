import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "Chat With Pdf",
      description: "Interact with your PDF.",
      link: "https://chat-pdf-psi.vercel.app/",
    },
    {
      title: "AI Tutor",
      description: "Upload PDF and it generates Quiiz.",
      link: "https://quiz-app-jhx5.vercel.app/",
    },
    {
      title: "Job Helper",
      description: "Makes applying to jobs easier.",
      link: "https://job-helper-ochre.vercel.app/",
    },
    {
      title: "Brand Design",
      description: "3D Model project.",
      link: "https://brand-design-ten.vercel.app/",
    },
    {
      title: "Cadbury",
      description: "Cadbury shop.",
      link: "https://cadbury-two.vercel.app/",
    },
    {
      title: "Card component",
      description: "Card Animation .",
      link: "https://card-animation-component.vercel.app/",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
