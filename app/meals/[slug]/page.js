export default async function MealPage({ params }) {
    const { slug } = await params;
    
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>This is Meal</h1>
            <p>{slug}</p>
        </main>
    );
}