import { useState } from "react";
import { ArrowLeft, Camera, MapPin, Waves, Droplets, CloudDrizzle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ReportForm = () => {
  const navigate = useNavigate();
  const [selectedHazard, setSelectedHazard] = useState<string>("");
  const [description, setDescription] = useState("");
  const [location] = useState("Current GPS Location");

  const hazardTypes = [
    { id: "flood", name: "Flood", icon: Droplets, color: "text-blue-600" },
    { id: "high-waves", name: "High Waves", icon: Waves, color: "text-ocean-blue" },
    { id: "tsunami", name: "Tsunami", icon: AlertTriangle, color: "text-red-600" },
    { id: "storm-surge", name: "Storm Surge", icon: CloudDrizzle, color: "text-gray-600" }
  ];

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ selectedHazard, description, location });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-surface via-white to-ocean-surface/30 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate("/")}
          className="mr-3"
        >
          <ArrowLeft className="w-6 h-6 text-ocean-blue" />
        </Button>
        <h1 className="text-xl font-semibold text-ocean-deep">Report Hazard</h1>
      </header>

      {/* Form Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Step 1: Hazard Type Selection */}
        <Card className="p-6">
          <h2 className="text-lg font-medium text-ocean-deep mb-4">Select Hazard Type</h2>
          <div className="grid grid-cols-2 gap-3">
            {hazardTypes.map((hazard) => {
              const IconComponent = hazard.icon;
              return (
                <button
                  key={hazard.id}
                  onClick={() => setSelectedHazard(hazard.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedHazard === hazard.id
                      ? "border-ocean-blue bg-ocean-light/30"
                      : "border-border hover:border-ocean-light"
                  }`}
                >
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${hazard.color}`} />
                  <p className="text-sm font-medium text-center">{hazard.name}</p>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Step 2: Description */}
        <Card className="p-6">
          <h2 className="text-lg font-medium text-ocean-deep mb-4">Description</h2>
          <Textarea
            placeholder="Describe the hazard conditions, severity, and any additional details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </Card>

        {/* Step 3: Photo/Video Upload */}
        <Card className="p-6">
          <h2 className="text-lg font-medium text-ocean-deep mb-4">Add Media (Optional)</h2>
          <Button
            variant="outline"
            className="w-full h-16 border-2 border-dashed border-ocean-light text-ocean-blue hover:bg-ocean-light/30"
          >
            <Camera className="w-6 h-6 mr-3" />
            Take Photo or Record Video
          </Button>
        </Card>

        {/* Step 4: Location Preview */}
        <Card className="p-6">
          <h2 className="text-lg font-medium text-ocean-deep mb-4">Location</h2>
          <div className="bg-muted rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
            {/* Mock map preview */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-light to-ocean-surface opacity-50"></div>
            <div className="relative z-10 text-center">
              <MapPin className="w-8 h-8 text-ocean-blue mx-auto mb-2" />
              <p className="text-sm font-medium text-ocean-deep">{location}</p>
              <p className="text-xs text-muted-foreground">Tap to adjust location</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Submit Button */}
      <div className="p-6 pt-0">
        <Button
          onClick={handleSubmit}
          disabled={!selectedHazard}
          className="w-full h-14 bg-gradient-ocean hover:bg-primary-hover text-white font-semibold text-lg rounded-2xl shadow-wave disabled:opacity-50"
        >
          Submit Report
        </Button>
      </div>
    </div>
  );
};

export default ReportForm;