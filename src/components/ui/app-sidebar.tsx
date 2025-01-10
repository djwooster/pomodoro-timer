"use client";

import {
  Brain,
  Calendar,
  Clock,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "History",
    url: "/history",
    icon: Clock,
  },
  {
    title: "Learn Productivity",
    url: "/learn-productivity",
    icon: Brain,
  },
];

export function AppSidebar() {
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <Sidebar>
      <SidebarContent className="bg-[#111111]">
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-blue-50 hover:bg-zinc-800 hover:text-pink-600 transition-all duration-300"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
