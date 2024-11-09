import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='w-[20%]   h-full'>
            <header className="shadow sticky top-0 h-full">
                <nav className="bg-gray-100 border-gray-500 px-3 lg:px-6 py-2.5 h-full flex flex-col justify-between">
                    <div className="flex flex-col items-start mx-auto">
                        
                        <h1 className='text-2xl mb-8 mt-5 font-semibold'>Categories</h1>
                        {/* Navigation links vertically aligned */}
                        <ul className="flex flex-col font-medium space-y-4">
                            <li>
                                <NavLink
                                    to="smiley"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Smiley & Emotions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/people"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    People & Body
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/animal"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Animal & Nature
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/food"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Food & Drink
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/activities"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Activities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/travel"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Travel & Places
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/objects"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Objects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/symbols"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Symbols
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/flag"
                                    className={({ isActive }) =>
                                        `block  duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Flags
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/favourite"
                                    className={({ isActive }) =>
                                        `block  font-bold text-2xl duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    Favourite
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block  duration-200 font-bold text-2xl ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                   
                </nav>
            </header>
        </div>
    );
}
