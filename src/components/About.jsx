const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I'm a passionate front-end developer with a focus on creating modern and
        responsive web applications. My goal is to build products that solve real-world
        problems and contribute to the growth of innovative companies.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Skills & Technologies</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <span className="bg-gray-200 p-2 rounded">React</span>
        <span className="bg-gray-200 p-2 rounded">Tailwind CSS</span>
        <span className="bg-gray-200 p-2 rounded">JavaScript</span>
        <span className="bg-gray-200 p-2 rounded">TypeScript</span>
        <span className="bg-gray-200 p-2 rounded">Git & GitHub</span>
        <span className="bg-gray-200 p-2 rounded">Node.js</span>
      </div>

      <h3 className="text-2xl font-semibold mt-6">My Values</h3>
      <p className="mt-2">
        I believe in continuous learning, collaboration, and creating accessible and
        inclusive web applications. In my free time, I enjoy coding challenges, contributing
        to open-source, and exploring new technologies.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Check Out My Work</h3>
      <p className="mt-2">
        I’ve worked on several exciting projects. Feel free to explore them on my <a href="https://github.com/uyoxy" className="text-purple-500 underline">GitHub</a> or <a href="https://www.linkedin.com/in/blessing-timothy-79749a240/" className="text-purple-500 underline">LinkedIn</a>.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Testimonials</h3>
      <blockquote className="border-l-4 pl-4 mt-2 italic">
        "Blessing is a highly skilled developer with a strong work ethic. His contributions
        to our project were invaluable."
        <br />
        <span className="font-bold">- olufunbi ibrahim, Senior Developer at kudirat hub</span>
      </blockquote>
    </section>
  );
};

export default About;
