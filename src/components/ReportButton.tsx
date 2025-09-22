import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReportButton = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-8">
      <Button 
        size="lg"
        className="w-full max-w-sm h-20 bg-gradient-ocean hover:bg-primary-hover text-white font-semibold text-xl rounded-3xl shadow-wave transition-all duration-300 hover:scale-105"
      >
        <Waves className="w-8 h-8 mr-3" />
        Report Hazard
      </Button>
    </div>
  );
};

export default ReportButton;