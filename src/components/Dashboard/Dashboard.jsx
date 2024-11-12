import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
   

    // Array of navigation items
    const navItems = [
        { path: "smiley", label: "😄 Smiley & Emotions" },
        { path: "/people", label: "🙋‍♂️ People & Body" },
        { path: "/animal", label: "🍁 Animal & Nature" },
        { path: "/food", label: "🍲 Food & Drink" },
        { path: "/activities", label: "⚽ Activities" },
        { path: "/travel", label: "🛩 Travel & Places" },
        { path: "/objects", label: "🧰 Objects" },
        { path: "/symbols", label: "⚠ Symbols" },
        { path: "/flag", label: "🚩 Flags" },
        { path: "/favourite", label: "Favourite", extraClass: "font-bold text-2xl" },
        { path: "/about", label: "About", extraClass: "font-bold text-2xl" },
    ];

    return (
        <div className="flex h-full">
           {/* Sidebar */}
            <div >
                <header className="shadow sticky top-0 h-full">
                    <nav className="px-3 lg:px-6 py-2.5 h-full flex flex-col justify-between">
                        <div className="flex flex-col items-start mx-auto">
                            <h1 className="text-2xl mb-8 mt-5 font-semibold">Categories</h1>
                            {/* Dynamic Navigation Links */}
                            <ul className="flex flex-col font-medium space-y-4">
                                {navItems.map(({ path, label, extraClass }) => (
                                    <li key={path}>
                                        <NavLink
                                            to={path}
                                            className={({ isActive }) =>
                                                `block duration-200 ${
                                                    isActive ? "text-black" : "text-gray-700"
                                                } border-b border-gray-100 hover:bg-gray-50 ${
                                                    extraClass || ""
                                                }`
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}
