import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation, NavItems } from "@/data/header";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <NavHashLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">ECCBO</span>
        </NavHashLink>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-6 mx-auto">
            {navigation.map((item) => (
              <NavHashLink
                key={item.name}
                to={item.to === NavItems.AboutUs || item.to === NavItems.Home ? item.to : `#${item.to}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </NavHashLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button>Donate</Button>
          </div>
        </nav>
        <div className="mr-4 flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <SheetHeader>
                <SheetTitle>ECCBO</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <NavHashLink
                    key={item.name}
                    to={item.to === NavItems.AboutUs || item.to === NavItems.Home ? item.to : `#${item.to}`}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavHashLink>
                ))}
                <Button className="w-full">Donate</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
