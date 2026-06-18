export default async function SearchApi(start_date=null){
    let api = "https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU&";
    if (start_date != null){
        api = "https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU&start_date="+start_date
    }

    const response = await fetch(api);

    return response.json();
}