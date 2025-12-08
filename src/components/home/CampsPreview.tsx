import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CampCard } from "@/components/camps/CampCard";
import { camps } from "@/data/camps";
import { ArrowRight } from "lucide-react";

export function CampsPreview() {
  const featuredCamps = camps.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              精選歐洲夏令營
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              嚴選歐洲頂尖營隊，涵蓋 STEAM、語言、運動、戶外等多元主題
            </p>
          </div>
          <Link to="/camps" className="mt-6 md:mt-0">
            <Button variant="outline-primary">
              查看所有營隊
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCamps.map((camp, index) => (
            <div 
              key={camp.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CampCard camp={camp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
