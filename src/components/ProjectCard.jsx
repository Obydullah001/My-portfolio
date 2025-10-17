import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{project.name}</h3>
        <Link to={`/projects/${project.id}`}>
          <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            View More / Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;