"use client";

import Link from "next/link";
import { use, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { Home, LogOut, Menu, CircleIcon } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();
  const pathname = usePathname();
  
  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push("/");
  }

  return (
    <header className="border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-semibold text-foreground">ACME</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/pricing"
            className={`text-sm font-medium hover:text-foreground transition-colors ${
              pathname === "/pricing"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Pricing
          </Link>
          <ModeToggle />
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer size-9">
                  <AvatarImage alt={user.name || ""} />
                  <AvatarFallback>
                    {user.email
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-1">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className="w-full">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="w-full flex-1 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost" className="text-sm px-4 py-2 rounded-full">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild className="text-sm px-4 py-2 rounded-full">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-2">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-foreground/80 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav - Slide Down */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/90 shadow-sm">
          <nav className="px-4 py-4 flex flex-col space-y-3">
            <Link
              href="/pricing"
              className={`text-sm font-medium hover:text-foreground transition-colors ${
                pathname === "/pricing" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <form
                  action={async () => {
                    await handleSignOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <button className="text-left text-sm font-medium hover:text-foreground transition-colors text-muted-foreground">
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  href="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center"
                >
                  <Button variant="ghost" className="w-full text-sm rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center"
                >
                  <Button className="w-full text-sm rounded-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
