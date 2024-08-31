"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const excludedPaths = ['/'];

const NavbarWrapper: React.FC = () => {
    const pathname = usePathname();

    // Menampilkan Navbar hanya jika pathname tidak ada di excludedPaths
    const showNavbar = !excludedPaths.includes(pathname);

    return showNavbar ? <Navbar /> : null;
};

export default NavbarWrapper;
