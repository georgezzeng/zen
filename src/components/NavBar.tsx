import { Book, Menu, Heart, Activity, Luggage, School, Bird } from "lucide-react";
// @ts-ignore
import MichiganIcon from '@/assets/michigan-wolverines-2.svg?react';
import WisconsinIcon from '@/assets/wisconsin-badgers.svg?react';
import MorgridgeIcon from '@/assets/morgridge.svg?react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  profiles?: {
    github: {
      url: string;
    };
    linkedin: {
      url: string;
    };
  };
}

const defaultLogo = {
  url: ".",
  src: "https://img.icons8.com/?size=100&id=111114&format=png&color=FAB005",
  alt: "z-cute",
  title: "Zen",
}

const defaultMenu = [
  { title: "Home",
    url: "."
  },
  { title: "Work Experiences",
    url: "internship-experiences",
    items: [ {
      title: "University of Michigan ITS",
      description: "Software Development Intern",
      icon: <MichiganIcon className="size-8 shrink-0" />,
      url: "um-its"
    }, {
      title: "Wisconsin Sea Grant",
      description: "Software Development Intern",
      icon: <WisconsinIcon className="size-8 shrink-0" />,
      url: "sea-grant"
    }, {
      title: "Morgridge Institute For Research",
      description: "Software Development Intern",
      icon: <MorgridgeIcon className="size-8 shrink-0" />,
      url: "morgridge"
    }]
  },
  { title: "Projects",
    url: "projects",
    items: [ {
      title: "Bird",
      description: "AI Chatbot",
      icon: <Bird className="size-6 shrink-0" />,
      url: "yan-ling"
    }]
  },
  { title: "About",
    url: "about",
    items: [ {
      title: "Interests",
      description: "My interests and hobbies",
      icon: <Heart className="size-6 shrink-0" />,
      url: "interests"
    }, {
      title: "Life",
      description: "My life experiences",
      icon: <Activity className="size-6 shrink-0" />,
      url: "life"
    }, {
      title: "Travel",
      description: "My travel experiences",
      icon: <Luggage className="size-6 shrink-0" />,
      url: "travel"
    }, {
      title: "Education",
      description: "My education experiences",
      icon: <School className="size-6 shrink-0" />,
      url: "education"
    }]
  }
]

const defaultProfiles = {
  github: {url: 'https://github.com/georgezzeng'},
  linkedin: {url: 'https://www.linkedin.com/in/george-zeng-4a28b6259/'}
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = React.forwardRef<HTMLAnchorElement, { item: MenuItem }>(
  ({ item }, ref) => {
    return (
      <a
        ref={ref}
        className="w-105 flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
        href={item.url}
      >
        <div className=" mt-1">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </a>
    );
  }
);
SubMenuLink.displayName = "SubMenuLink";

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};



export default function NavBar({ logo = defaultLogo, menu = defaultMenu, profiles = defaultProfiles}: Navbar1Props) {
  return (
    <section className="py-4">
      <div className="container max-w-none">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6 pl-4">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg ml-1 mb-0.5 font-semibold">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 ml-auto pr-4">
            <ModeToggle />
            <Button asChild variant="outline" size="icon">
              <a href={profiles.github.url}>
                <FaGithub className="size-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href={profiles.linkedin.url}>
                <FaLinkedin className="size-5" />
              </a>
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex justify-center gap-3">
                    <Button asChild variant="outline" size="icon">
                      <a href={profiles.github.url}>
                        <FaGithub className="size-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href={profiles.linkedin.url}>
                        <FaLinkedin className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}



