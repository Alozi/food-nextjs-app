import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <ul>
        <li><Link href="/meals">Go to Meals Page</Link></li>
        <li><Link href="/meals/share">Go to Meals Share Page</Link></li>
        <li><Link href="/meals/meal-1">View Meal 1</Link></li>
        <li><Link href="/meals/meal-2">View Meal 2</Link></li>
        <li><Link href="/community">Go to Community Page</Link></li>
      </ul>
    </main>
  );
}
