"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tractor, Sprout, Droplets } from "lucide-react";

const tools = [
  {
    name: "John Deere Tractor",
    type: "Heavy Equipment",
    status: "Active",
    icon: Tractor,
    lastMaintenance: "2024-01-15",
  },
  {
    name: "Irrigation System",
    type: "Water Management",
    status: "Active",
    icon: Droplets,
    lastMaintenance: "2024-02-01",
  },
  {
    name: "Seeding Machine",
    type: "Planting",
    status: "Maintenance",
    icon: Sprout,
    lastMaintenance: "2024-02-10",
  },
];

export function UserTools() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-muted rounded-lg"
          >
            <div className="p-2 bg-background rounded-full">
              <tool.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">{tool.name}</p>
                <Badge
                  variant={tool.status === "Active" ? "default" : "secondary"}
                >
                  {tool.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{tool.type}</p>
              <p className="text-sm text-muted-foreground">
                Last Maintenance: {tool.lastMaintenance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
