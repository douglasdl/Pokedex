import './styles/main.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

export function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}