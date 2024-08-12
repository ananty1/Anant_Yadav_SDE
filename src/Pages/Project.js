import homecart from '../assets/Projects/HomeCart.png';
import HomeBlog from '../assets/Projects/HomeBlog.png';
import movie_recommendation from '../assets/Projects/movie_recommendation.png';
const projects = [
  {
    title: "HomeCart- A commercial e-commerce website",
    description: "The project is inspired by various online e-commerece plateforms, the goal is to understand and learn e-commerce business from development perspective, It includes the Product listing,Adding to Cart,Checkout Orders, and Tracking Order.",
    technologies: "Boostrap, HTML, CSS, Ajax,and Django.",
    image: homecart,
    link: "https://home-cart-with-cwh.vercel.app/",
  },
  {
    title: "HomeBlog - A Commercial blog plateform",
    description: "A blogging app with features of blogs listing ,signing up , logging in, creating blog options.",
    technologies: "MongoDB, Express, React, Quill Editor, Node.js",
    image: HomeBlog,
    link: "https://home-blog-blogger-feels-home-here.vercel.app/",
  },
  {
    title: "Movie Recommendation",
    description: "An attempt to create a movie recommendation website, using TMDB dataset, and clusting algorithm - KNN for recommendation",
    technologies: "Python, Numpy ,Pandas, and scikt-learn.",
    image: movie_recommendation,
    link: "https://movie-recommendation-tmdb-dataset.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-600 min-h-screen p-10">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center justify-center mb-10 h-[90vh] w-full"
        >
          <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:order-1" : "sm:order-2"} flex justify-center`}>
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full h-auto mb-4 sm:mb-0"
            />
          </div>
          <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"} flex flex-col justify-center items-center sm:items-start text-white p-6`}>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-xl mb-2">{project.description}</p>
            <p className="text-lg mb-2">Technologies: {project.technologies}</p>
            <a
              href={project.link}
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
