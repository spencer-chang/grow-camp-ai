import { Link } from "react-router-dom";
import { Camp } from "@/data/camps";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Users } from "lucide-react";

interface CampCardProps {
  camp: Camp;
}

const categoryColors: Record<string, string> = {
  STEAM: "bg-purple-100 text-purple-700 border-purple-200",
  Sports: "bg-green-100 text-green-700 border-green-200",
  English: "bg-blue-100 text-blue-700 border-blue-200",
  Outdoor: "bg-amber-100 text-amber-700 border-amber-200",
  Arts: "bg-pink-100 text-pink-700 border-pink-200",
};

const categoryLabels: Record<string, string> = {
  STEAM: "科技創新",
  Sports: "運動專項",
  English: "英語沉浸",
  Outdoor: "戶外探險",
  Arts: "藝術創意",
};

export function CampCard({ camp }: CampCardProps) {
  return (
    <Link to={`/camps/${camp.id}`} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden card-elevated h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={camp.image}
            alt={camp.nameZh}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge 
            className={`absolute top-4 left-4 ${categoryColors[camp.category]} border`}
          >
            {categoryLabels[camp.category]}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{camp.city}, {camp.country}</span>
          </div>

          <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {camp.nameZh}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {camp.descriptionZh}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {camp.ageMin}-{camp.ageMax} 歲
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {camp.duration}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-sm">{camp.rating}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-foreground">€{camp.priceEUR.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground ml-1">起</span>
            </div>
            <span className="text-sm text-primary font-medium group-hover:underline">
              查看詳情 →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
