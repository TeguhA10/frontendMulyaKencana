"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const excludedPaths = ['/'];

const NavbarWrapper: React.FC = () => {
    const pathname = usePathname();

    const showNavbar = !excludedPaths.includes(pathname);

    return showNavbar ? <Navbar /> : null;
};

export default NavbarWrapper;
