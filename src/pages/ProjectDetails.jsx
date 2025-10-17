import { useParams } from 'react-router';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p className="text-center mt-20 text-red-500">Project not found.</p>;

  return (
    <section className="p-8 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">{project.name}</h2>
      <img src={project.image} alt={project.name} className="w-full max-w-3xl mx-auto mb-6 rounded-lg shadow" />
      <div className="space-y-4 text-gray-800 dark:text-gray-200">
        <p><strong>🛠 Tech Stack:</strong> {project.techStack.join(', ')}</p>
        <p><strong>📄 Description:</strong> {project.description}</p>
        <p><strong>🔗 Live:</strong> <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">{project.liveLink}</a></p>
        <p><strong>📁 GitHub:</strong> <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">{project.githubLink}</a></p>
        <p><strong>⚠️ Challenges:</strong> {project.challenges}</p>
        <p><strong>🌱 Future Plans:</strong> {project.improvements}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;