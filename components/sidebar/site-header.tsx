"use client"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "../ui/themeToggle"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="h-44 w-44"
          />
        <div className="ml-auto flex items-center gap-2">
        <ThemeToggle/>
        </div>
      </div>
    </header>
  )
}
