"use client";
import {usePathname} from "next/navigation";
import { useMemo } from "react";
import {HiHome} from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
import Box from "./Box";
import SidebarItem from "./SidebarItem";

interface SideBarProps{
    children: React.ReactNode;
}
const SideBar: React.FC<SideBarProps> = ({
    children
}) =>{
    const pathname = usePathname()

    const routes = useMemo(()=>[
        {
            icon: HiHome,
            label:'Home',
            active: pathname !== '/search',
            href:'/',
        },
        {
            icon: BiSearch,
            label:'Search',
            active: pathname === '/search',
            href:'/'
        }
    ],[pathname])
    return(
        <div className="flex h-full">
            <div 
            className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            "
            >
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    ">
                     {routes.map((item)=>{
                       return( <SidebarItem key={item.label} {...item}> </SidebarItem>)
                     })
                     }   
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    Song Libary
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}

export default SideBar;