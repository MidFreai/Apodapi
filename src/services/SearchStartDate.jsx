export default async function SearchStartDate({ start_date }){
    const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU&start_date="+{ start_date }
    );

    const [Info, setInfo] = useState([]);

    useEffect(() => {
        response.json()
            .then(data => { setInfo(data); })
            .catch(error => { console.error(error); });
    }, []);

    return Info;
}