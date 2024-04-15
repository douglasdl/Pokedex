import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/app/Home'
import { List } from '@/app/List'
import { PokemonDetails } from '@/app/PokemonDetails'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<List />} />
                <Route path="/details/:name" element={<PokemonDetails />} />
            </Route>
        </Routes>
    )
}
