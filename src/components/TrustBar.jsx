import React from "react";
import { Shield, Award, Users } from "lucide-react";

export default function TrustBar() {
  return (
    <div
      id="trust-bar"
      className="fixed top-0 left-0 right-0 text-white py-2.5 md:py-3 z-[50]"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-dark) 100%)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        boxShadow: "0 1px 0 0 rgba(212, 175, 55, 0.1) inset",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            <Shield
              className="w-3.5 h-3.5"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            />
            <span>ACL 123456</span>
          </div>
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            <Award
              className="w-3.5 h-3.5"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            />
            <span>15+ Years</span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            <Users
              className="w-3.5 h-3.5"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            />
            <span>2,500+ Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}
