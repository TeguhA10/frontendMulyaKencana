"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const excludedPaths = ['/'];

const FooterWrapper: React.FC = () => {
    const pathname = usePathname();

    const showFooter = !excludedPaths.includes(pathname);

    return showFooter ? <Footer /> : null;
};

export default FooterWrapper;
