import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.location.href = "https://www.arzhost.com/terms-conditions/";
  }, []);

  return (
    <div className="min-h-screen bg-ocean-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-primary mx-auto mb-4"></div>
        <p className="text-ocean-text">
          Redirecting to Terms and Conditions page...
        </p>
      </div>
    </div>
  );
}
