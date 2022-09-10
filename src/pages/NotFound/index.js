import React from "react";
import { Link } from 'react-router-dom'

export default function NoFound() {
  return (
    <>
      <h1>The page is NOT Found</h1>
      <div>return to <Link to="/">HOME PAGE</Link></div>
    </>    
  )
}
