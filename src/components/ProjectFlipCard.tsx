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
    <div className="group perspective-1000 h-48">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180">
        {/* Front Side - Title Only */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full border-2 border-foreground bg-card rounded-lg flex items-center justify-center p-6">
            <h3 className="font-display text-lg md:text-xl text-center tracking-wide">
              {project.title}
            </h3>
          </div>
        </div>
        
        {/* Back Side - Description and Tools */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-x-180">
          <div className="w-full h-full border-2 border-foreground bg-card rounded-lg p-6 flex flex-col justify-between">
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
      </div>
    </div>
  );
};

export default ProjectFlipCard;