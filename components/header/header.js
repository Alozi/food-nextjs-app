import Image from "next/image";
import Link from "next/link";

import HeaderBackground from "./header-background.js";
import classes from './header.module.css';
import logoImage from '@/assets/logo.png'

export default function Header() {
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
                        <li><Link href="/meals">Browse Meals</Link></li>
                        <li><Link href="/community">Foodies Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>)
}