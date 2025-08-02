"use client";

import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export function AboutNavLink() {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('o-nas');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <NavigationMenuLink asChild>
      <Link
        href="#o-nas"
        onClick={handleScrollToAbout}
        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        O nas
      </Link>
    </NavigationMenuLink>
  );
}
