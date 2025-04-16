"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, Settings, Shield, Activity, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", icon: Users, label: "Team" },
    { href: "/dashboard/general", icon: Settings, label: "General" },
    { href: "/dashboard/activity", icon: Activity, label: "Activity" },
    { href: "/dashboard/security", icon: Shield, label: "Security" },
  ];

  return (
    <div className="flex min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full">
      {/* Sidebar (desktop) */}
      <aside
        className={`
          lg:sticky
          top-[68px]
          w-64
          bg-background
          border-r
          border-border
          h-[calc(100dvh-68px)]
          overflow-y-auto
          hidden
          lg:flex
          flex-col
          ${isSidebarOpen ? "translate-x-0" : ""}
        `}
      >
        <nav className="p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={`shadow-none my-1 w-full justify-start ${
                  pathname === item.href
                    ? "bg-secondary text-secondary-foreground"
                    : ""
                }`}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile layout wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div
          className={`
            lg:hidden
            sticky
            top-[68px]
            z-10
            flex
            items-center
            justify-between
            bg-background
            border-b
            border-border
            p-4
          `}
        >
          <div className="flex items-center">
            <span className="font-medium">Settings</span>
          </div>
          <Button
            className="-mr-3"
            variant="ghost"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        {/* Slide-out sidebar for mobile */}
        {isSidebarOpen && (
          <div
            className={`
              lg:hidden
              fixed
              top-[68px]
              left-0
              z-40
              w-64
              bg-background
              border-r
              border-border
              h-[calc(100dvh-68px)]
              overflow-y-auto
            `}
          >
            <nav className="p-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={`shadow-none my-1 w-full justify-start ${
                      pathname === item.href
                        ? "bg-secondary text-secondary-foreground"
                        : ""
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}