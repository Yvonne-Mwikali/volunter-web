import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavHashLink } from "react-router-hash-link";
import { navigation } from "@/data/header";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
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
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <NavHashLink
                    key={item.name}
                    to={item.to}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavHashLink>
                ))}
                <Button className="w-full">Book Appointment</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <NavHashLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">ElectricalLife</span>
        </NavHashLink>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <NavHashLink
                key={item.name}
                to={item.to}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </NavHashLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button>Book Appointment</Button>
          </div>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden"></div>
      </div>
    </header>
  );
}
