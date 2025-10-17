import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
  return (
      <div className="rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden 
                    transform hover:scale-105 hover:shadow-2xl transition duration-300">
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{project.description}</p>
        <Link to={`/projects/${project.id}`}>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg 
                             hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 transition">
            View More / Details
          </button>
        </Link>
      </div>
    </div>


  );
};

export default ProjectCard;