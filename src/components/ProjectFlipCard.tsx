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
  // Split the summary into bullet points (split by periods and filter out empty strings)
  const bulletPoints = project.summary
    .split('.')
    .map(point => point.trim())
    .filter(point => point.length > 0);

  return (
    <div className="group relative h-80 overflow-hidden">
      {/* Title Card - visible by default */}
      <div className="absolute inset-0 w-full h-full border-2 border-foreground bg-card rounded-lg flex items-center justify-center p-6 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        <h3 className="font-display text-lg md:text-xl text-center tracking-wide leading-tight px-4">
          {project.title}
        </h3>
      </div>
      
      {/* Description Card - slides up on hover */}
      <div className="absolute inset-0 w-full h-full border-2 border-foreground bg-card rounded-lg p-6 flex flex-col justify-between transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
        <div className="flex-1 overflow-y-auto">
          <ul className="list-disc pl-5 space-y-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-sm text-foreground/85 leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-foreground/20">
          <p className="text-xs text-foreground/70 mb-3 font-medium">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs px-2.5 py-1.5">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFlipCard;