import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code2, Wrench, Layers } from "lucide-react";
import React from "react";

type SkillsMap = Record<string, readonly string[]>;

interface SkillsShowcaseProps {
  skills: SkillsMap;
}

const iconFor = (category: string) => {
  const key = category.toLowerCase();
  if (key.includes("tool")) return <Wrench className="mr-2" size={18} />;
  if (key.includes("program")) return <Code2 className="mr-2" size={18} />;
  if (key.includes("data") || key.includes("ml") || key.includes("science")) return <Brain className="mr-2" size={18} />;
  return <Layers className="mr-2" size={18} />;
};

const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({ skills }) => {
  const entries = Object.entries(skills);
  const defaultTab = entries[0]?.[0] ?? "Skills";

  return (
    <div className="space-y-8">
      {/* Tabbed categories */}
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="w-full grid grid-cols-5 gap-1 bg-card border border-foreground/20 p-1">
          {entries.map(([category, list]) => (
            <TabsTrigger key={category} value={category} className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs px-2 py-2">
              <span className="flex items-center justify-center text-center">
                {iconFor(category)}
                <span className="hidden sm:inline">{category}</span>
                <span className="sm:hidden">{category.split(' ')[0]}</span>
                <span className="ml-1 text-foreground/60">({list.length})</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {entries.map(([category, list]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Card className="border-2 border-foreground bg-card animate-enter">
              <CardHeader>
                <CardTitle className="flex items-center">{iconFor(category)}<span className="tracking-wide">{category}</span></CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex flex-wrap gap-2 pb-3">
                    {list.map((item) => (
                      <Badge
                        key={item}
                        className="bg-accent text-accent-foreground border border-foreground/20 hover-scale"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Highlight strip */}
      <div className="rounded-lg border-2 border-foreground/60 bg-card/60 p-6 text-center animate-enter">
        <p className="text-lg md:text-xl">
          A bold stack spanning analytics, ML, and engineering — crafted for performance and clarity.
        </p>
      </div>
    </div>
  );
};

export default SkillsShowcase;
