import { useParams } from 'react-router';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-center text-xl text-red-500">🚫 Project not found.</p>
      </section>
    );
  }

  return (
    <section className="p-6 md:p-10 bg-white dark:bg-gray-900 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300 text-center mb-10">
        {project.name}
      </h2>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-4xl rounded-xl shadow-2xl border border-indigo-200 dark:border-indigo-700"
        />
      </div>

      {/* Details */}
      <div className="max-w-3xl mx-auto space-y-6 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">🛠 Tech Stack</h3>
          <p>{project.techStack.join(', ')}</p>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">📄 Description</h3>
          <p>{project.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">🔗 Live Site</h3>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline break-words"
          >
            {project.liveLink}
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">📁 GitHub Repo</h3>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline break-words"
          >
            {project.githubLink}
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">⚠️ Challenges</h3>
          <p>{project.challenges}</p>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">🌱 Future Plans</h3>
          <p>{project.improvements}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;