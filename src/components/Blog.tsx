
import React from "react";
import { Link, To, useLocation, useNavigate } from "react-router-dom";

export default function PortfolioBlog() {
    const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
    const handleNavClick = (path: To) => {
    navigate(path);}

  const blogs = [
    {
      title: "My Journey Into Web Development",
      date: "2025-01-01",
      description:
        "How I started learning web development, the challenges I faced, and how I kept improving.",
        path:'Single'
    },
    {
      title: "Building My First React Project",
      date: "2025-02-12",
      description:
        "A deep dive into how I built my first complete React project and what I learned.",
        path:'Single1'
    },
    {
      title: "Why I Love TypeScript",
      date: "2025-03-05",
      description:
        "Using TypeScript made my code safer, cleaner, and easier to scale.",
        path:'Single2'
    },
  ];

  return (
    <div className="min-h-screen  py-12 lg:py-10">
     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">My Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-card border border-border shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
            <p className="">{blog.description}</p>
            <button 
            onClick={() => handleNavClick(blog.path)}
              className="mt-4 px-3 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-all duration-300"
            >
               Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
