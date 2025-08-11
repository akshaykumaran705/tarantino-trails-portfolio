import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  summary: string;
  tools: string[];
}

interface ProjectFlipCardProps {
  project: Project;
}

const ProjectFlipCard = ({ project }: ProjectFlipCardProps) => {
  return (
    <div className="group relative h-48 overflow-hidden">
      {/* Title Card - visible by default */}
      <div className="absolute inset-0 w-full h-full border-2 border-foreground bg-card rounded-lg flex items-center justify-center p-6 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        <h3 className="font-display text-lg md:text-xl text-center tracking-wide">
          {project.title}
        </h3>
      </div>
      
      {/* Description Card - slides up on hover */}
      <div className="absolute inset-0 w-full h-full border-2 border-foreground bg-card rounded-lg p-6 flex flex-col justify-between transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
        <p className="text-sm text-foreground/85 mb-4">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFlipCard;