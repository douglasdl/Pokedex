import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'
import { Pokedex } from '@/pages/Pokedex'
import { Pokedex2 } from '@/pages/Pokedex2'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokedex2' element={<Pokedex2 />} />
            </Route>
        </Routes>
    )
}
