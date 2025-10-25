import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-700 mb-8">
         My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;