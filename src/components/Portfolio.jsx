const Portfolio = () => {
    const projects = [
      { title: "Project 1", description: "A cool project", link: "#" },
      { title: "Project 2", description: "Another awesome project", link: "#" },
    ];
  
    return (
      <section id="portfolio" className="p-8  bg-gray-95 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-purple-600 underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  