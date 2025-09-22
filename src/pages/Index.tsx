import Header from "@/components/Header";
import ReportButton from "@/components/ReportButton";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-surface to-white flex flex-col">
      <Header />
      <ReportButton />
      <BottomNavigation />
    </div>
  );
};

export default Index;
