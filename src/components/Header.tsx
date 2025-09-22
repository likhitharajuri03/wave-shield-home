import waveshieldLogo from "@/assets/waveshield-logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-6 px-4 bg-white border-b border-border">
      <div className="flex items-center gap-3">
        <img 
          src={waveshieldLogo} 
          alt="WaveShield Logo" 
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold text-ocean-deep">WaveShield</h1>
      </div>
    </header>
  );
};

export default Header;