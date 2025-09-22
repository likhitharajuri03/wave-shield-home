import { FileText, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { icon: FileText, label: "My Reports", active: false, path: "/my-reports" },
    { icon: Bell, label: "Notifications", active: false, path: "/notifications" },
    { icon: Settings, label: "Settings", active: false, path: "/settings" },
  ];

  return (
    <nav className="bg-white border-t border-border px-4 py-3">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-ocean-surface"
            >
              <Icon 
                className={`w-6 h-6 ${
                  item.active ? "text-ocean-blue" : "text-muted-foreground"
                }`} 
              />
              <span 
                className={`text-xs font-medium ${
                  item.active ? "text-ocean-blue" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;