import { SidebarLink } from "@/components/SidebarItems";
import { Cog, CalendarPlus , HomeIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Dashboard", icon: HomeIcon },
  { href: "/chatbot", title: "chatbot", icon: CalendarPlus  },
  { href: "/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
