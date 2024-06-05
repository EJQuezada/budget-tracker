"use client";
import Logo from "@/components/Logo";
import { link } from "fs";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  return ( 
    <>
        <DesktopNavbar />
    </>
  );
}

const items = [
    {label: "Dashboard", link: "/" },
    {label: "Transactions", link: "/transactions" },
    {label: "Manage", link: "/manage" },
];

function DesktopNavbar() {
    return (
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                    <div className="flex h-full">
                        {items.map(item => (
                            <NavbarItem
                            key={item.label}
                            link={item.link}
                            label={item.label}
                            />
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}

function NavbarItem({link, label}: {
    link: string;
    label: string
}) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className="relative flex items-center"></div>;
    )
}

export default Navbar;
