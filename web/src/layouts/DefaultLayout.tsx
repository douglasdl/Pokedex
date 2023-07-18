import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../components/SideMenu'

export function DefaultLayout() {

    return (
        <div className='text-white select-none w-screen h-screen'>
            <div className="flex h-screen w-screen">
                <main className="flex h-full w-full flex-col bg-black">
                    <section className="h-full flex-1 overflow-y-auto bg-black">
                        <Outlet />
                    </section>
                </main>
                <nav>
                    <SideMenu />
                </nav>
            </div>
        </div>
    )
}