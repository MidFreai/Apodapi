export default async function SearchApi(){
    const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU&start_date=2026-06-11"
    );

    return response.json();
}