export async function getArticles() {
    const res = await fetch(`${process.env.REACT_APP_STRAPI_API}/api/articles`);
    if (!res.ok) {
        throw new Error("Fehler beim Abrufen der Daten");
    }
    const data = await res.json();
    return data;
}
