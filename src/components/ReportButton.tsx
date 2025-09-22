import { Waves, AlertTriangle, Map, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReportButton = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-8">
      {/* Central Wave Icon */}
      <div className="w-24 h-24 bg-ocean-light rounded-full flex items-center justify-center mb-8">
        <Waves className="w-12 h-12 text-ocean-blue" />
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-ocean-deep mb-4 text-center">
        Stay Safe on the Water
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-sm">
        Report hazards to help protect your community
      </p>

      {/* Main Report Button */}
      <Button 
        size="lg"
        className="w-full max-w-sm h-16 bg-gradient-ocean hover:bg-primary-hover text-white font-semibold text-lg rounded-2xl shadow-wave transition-all duration-300 hover:scale-105 mb-6"
      >
        <AlertTriangle className="w-6 h-6 mr-3" />
        Report Hazard
      </Button>

      {/* Secondary Buttons */}
      <div className="flex gap-4 w-full max-w-sm">
        <Button 
          variant="outline"
          className="flex-1 h-14 border-2 border-ocean-light text-ocean-blue hover:bg-ocean-light rounded-2xl"
        >
          <Map className="w-5 h-5 mr-2" />
          Live Map
        </Button>
        
        <Button 
          variant="outline"
          className="flex-1 h-14 border-2 border-ocean-light text-ocean-blue hover:bg-ocean-light rounded-2xl"
        >
          <Users className="w-5 h-5 mr-2" />
          Community
        </Button>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-muted-foreground mt-8 text-center max-w-sm">
        Report hazards and view community updates to stay safe
      </p>
    </div>
  );
};

export default ReportButton;