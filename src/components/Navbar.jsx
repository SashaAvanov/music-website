import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkClass = 'heading text-lg sm:text-xl hover:text-purple-600';

    return (
        <nav className="bg-purple-300 border-b border-purple-300">
            <div className="mx-auto max-w-9xl px-4 md:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-between">
                        <NavLink to='/'><span className={ linkClass }>Sasha Avanov</span></NavLink>
                        <NavLink to='/music'><span className={ linkClass }>Music</span></NavLink>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar