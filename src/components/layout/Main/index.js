import React from 'react'

import { Routes, Route } from 'react-router-dom'

import TexasHoldem from '@/pages/TexasHoldem';
import UserList from '@/pages/userlist';
import UserDetail from '@/pages/UserDetail';
import Counter from '@/pages/Counter';
import NotFound from '@/pages/NotFound';

function Main() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<TexasHoldem />}></Route>
        <Route path="/user-list" element={<UserList />}></Route> 
        <Route path="/user/:id" element={<UserDetail />}></Route> 
        <Route path="/counter" element={<Counter />}></Route> 
        <Route path="*" element={<NotFound />}></Route> 
      </Routes>      
    </main>
  )
}

export default Main;