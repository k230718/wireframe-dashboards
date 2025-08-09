import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface ModuleLayoutProps {
  children: ReactNode;
  moduleType: "project" | "procurement";
}

const ModuleLayout = ({ children, moduleType }: ModuleLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar moduleType={moduleType} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default ModuleLayout;