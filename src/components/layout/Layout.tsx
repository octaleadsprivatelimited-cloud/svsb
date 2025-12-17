import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { CTAStrip } from "@/components/common/CTAStrip";

interface LayoutProps {
  children: ReactNode;
  showCTA?: boolean;
}

export const Layout = ({ children, showCTA = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {showCTA && <CTAStrip />}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
