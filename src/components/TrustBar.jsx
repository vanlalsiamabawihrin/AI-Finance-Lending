import React from "react";
import { Shield, Award, Users } from "lucide-react";

export default function TrustBar() {
  return (
    <div
      id="trust-bar"
      className="fixed top-0 left-0 right-0 text-white py-2 text-xs md:py-2.5 md:text-sm z-[50] border-b border-white/10"
      style={{
        background: "linear-gradient(to right, #071125, #0B1C3D, #071125)",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-center gap-3 md:gap-12 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
            <Shield className="w-4 h-4" style={{ color: "#C8A55A" }} />
            <span>Australian Credit Licence 123456</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
            <Award className="w-4 h-4" style={{ color: "#C8A55A" }} />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
            <Users className="w-4 h-4" style={{ color: "#C8A55A" }} />
            <span>2,500+ Happy Homeowners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
