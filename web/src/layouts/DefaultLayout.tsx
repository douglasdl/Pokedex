import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../components/SideMenu'

export function DefaultLayout() {

    return (
        <div className='flex items-center justify-start flex-col text-white select-none w-full h-full'>
            <nav className='w-full'>
                <SideMenu />
            </nav>
            
            <main className="flex h-full w-full flex-col bg-black">
                <section className="h-full flex-1 overflow-y-auto bg-black">
                    <Outlet />
                </section>
            </main>
        </div>
    )
}