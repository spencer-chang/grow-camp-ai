import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { CampCard } from "@/components/camps/CampCard";
import { camps, categories, cities } from "@/data/camps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const categoryLabels: Record<string, string> = {
  STEAM: "STEAM & Technology",
  Sports: "Sports Excellence",
  English: "English Immersion",
  Outdoor: "Outdoor Adventure",
  Arts: "Arts & Creativity",
};

const categoryDescriptions: Record<string, string> = {
  STEAM: "Robotics, coding, engineering, and innovation programs",
  Sports: "Professional coaching in football, tennis, sailing, and more",
  English: "Language immersion with cultural experiences",
  Outdoor: "Leadership, wilderness skills, and nature exploration",
  Arts: "Visual arts, performing arts, and creative expression",
};

export default function CampsEN() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [ageRange, setAgeRange] = useState([8, 18]);
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedCities([]);
    setAgeRange([8, 18]);
    setPriceRange([0, 6000]);
  };

  const filteredCamps = useMemo(() => {
    return camps.filter((camp) => {
      const matchesSearch =
        camp.nameZh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camp.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(camp.category);

      const matchesCity =
        selectedCities.length === 0 || selectedCities.includes(camp.city);

      const matchesAge =
        camp.ageMin <= ageRange[1] && camp.ageMax >= ageRange[0];

      const matchesPrice =
        camp.priceEUR >= priceRange[0] && camp.priceEUR <= priceRange[1];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCity &&
        matchesAge &&
        matchesPrice
      );
    });
  }, [searchTerm, selectedCategories, selectedCities, ageRange, priceRange]);

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedCities.length > 0 ||
    ageRange[0] !== 8 ||
    ageRange[1] !== 18 ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 6000;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium European Summer Programs
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explore our curated network of world-class summer programs across Europe. 
                Each program in our network has been carefully vetted for educational quality, 
                safety standards, and cultural enrichment value.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/auth">
                  <Button variant="hero" size="lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get AI Recommendations
                  </Button>
                </Link>
                <span className="text-sm text-muted-foreground">
                  Not sure where to start? Let our AI find the perfect match.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by program name, city, or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter Programs
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              )}
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-card rounded-2xl p-6 mb-8 border border-border animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg">Filter Options</h3>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Program Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={
                          selectedCategories.includes(category)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => toggleCategory(category)}
                      >
                        {categoryLabels[category]}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Cities */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Location
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <Badge
                        key={city}
                        variant={
                          selectedCities.includes(city) ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => toggleCity(city)}
                      >
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Age Range */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Age Range: {ageRange[0]} - {ageRange[1]} years
                  </label>
                  <Slider
                    value={ageRange}
                    onValueChange={setAgeRange}
                    min={6}
                    max={18}
                    step={1}
                    className="mt-2"
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Budget: €{priceRange[0].toLocaleString()} - €{priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={6000}
                    step={100}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Category Quick Links */}
          {!hasActiveFilters && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className="p-4 bg-card rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
                >
                  <div className="font-medium text-foreground mb-1">{categoryLabels[category]}</div>
                  <div className="text-xs text-muted-foreground">{categoryDescriptions[category]}</div>
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCamps.length}</span> programs
              {hasActiveFilters && " matching your criteria"}
            </p>
          </div>

          {/* Camp Grid */}
          {filteredCamps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCamps.map((camp, index) => (
                <div
                  key={camp.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CampCard camp={camp} isEnglish />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No programs found matching your criteria
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Can't Decide? Let AI Help You Choose
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Our AI-powered matching system analyzes your child's personality, interests, and goals 
              to recommend the most suitable programs from our network.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Start AI Matching
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
