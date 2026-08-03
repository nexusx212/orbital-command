import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  transparentNav?: boolean;
}

export const Layout = ({ children, transparentNav = false }: LayoutProps) => (
  <div className="flex min-h-screen flex-col bg-background">
    <Navbar transparent={transparentNav} />
    <main className={transparentNav ? "flex-1" : "flex-1 pt-20"}>{children}</main>
    <Footer />
  </div>
);
