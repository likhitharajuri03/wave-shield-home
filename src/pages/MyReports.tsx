import { ArrowLeft, Droplets, Waves, AlertTriangle, CloudDrizzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Report {
  id: string;
  hazardType: string;
  hazardName: string;
  icon: any;
  iconColor: string;
  date: string;
  location: string;
  status: "pending" | "verified" | "flagged";
}

const MyReports = () => {
  const navigate = useNavigate();

  const hazardTypes = {
    flood: { name: "Flood", icon: Droplets, color: "text-blue-600" },
    "high-waves": { name: "High Waves", icon: Waves, color: "text-ocean-blue" },
    tsunami: { name: "Tsunami", icon: AlertTriangle, color: "text-red-600" },
    "storm-surge": { name: "Storm Surge", icon: CloudDrizzle, color: "text-gray-600" }
  };

  const mockReports: Report[] = [
    {
      id: "1",
      hazardType: "high-waves",
      hazardName: "High Waves",
      icon: Waves,
      iconColor: "text-ocean-blue",
      date: "2024-01-15",
      location: "Santa Monica Beach, CA",
      status: "verified"
    },
    {
      id: "2",
      hazardType: "flood",
      hazardName: "Flood",
      icon: Droplets,
      iconColor: "text-blue-600",
      date: "2024-01-14",
      location: "Downtown Miami, FL",
      status: "pending"
    },
    {
      id: "3",
      hazardType: "tsunami",
      hazardName: "Tsunami",
      icon: AlertTriangle,
      iconColor: "text-red-600",
      date: "2024-01-12",
      location: "Pacific Coast Highway",
      status: "flagged"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Verified</Badge>;
      case "pending":
        return <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200">Pending</Badge>;
      case "flagged":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">Flagged</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
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
        <h1 className="text-xl font-semibold text-ocean-deep">My Reports</h1>
      </header>

      {/* Reports List */}
      <div className="flex-1 p-6 space-y-4">
        {mockReports.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No reports yet</p>
          </div>
        ) : (
          mockReports.map((report) => {
            const IconComponent = report.icon;
            return (
              <Card key={report.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent className={`w-8 h-8 ${report.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-ocean-deep">
                        {report.hazardName}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formatDate(report.date)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {report.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {getStatusBadge(report.status)}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyReports;