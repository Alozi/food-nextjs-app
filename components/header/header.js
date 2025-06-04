'use client';

import Image from "next/image";
import Link from "next/link";

import HeaderBackground from "./header-background.js";
import classes from './header.module.css';
import logoImage from '@/assets/logo.png'
import { usePathname } from "next/navigation.js";

export default function Header() {
    const path = usePathname();
    console.log(path);

    return (
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImage} alt="A plate with food on it" priority />
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link></li>
                        <li><Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}