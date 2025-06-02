import Image from "next/image";

export default function Header() {
    return (<>
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width={200} height={180} />
        <p>🔥 Let&apos;s get started! 🔥</p>
    </>);
}