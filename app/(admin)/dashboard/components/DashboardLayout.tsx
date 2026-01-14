import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
  user: {
    username: string;
    email: string;
  };
}

export default function DashboardLayout({
  children,
  user,
}: DashboardLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <Sidebar
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div
        style={{
          marginLeft: "250px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar
          user={user}
          isSidebarOpen={false}
          onMenuClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        <main
          style={{
            padding: "32px",
            flex: 1,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
