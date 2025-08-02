"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactButton() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button asChild variant="default" size="sm">
      <Link href="#kontakt" onClick={handleScrollToContact}>
        Kontakt
      </Link>
    </Button>
  );
}
