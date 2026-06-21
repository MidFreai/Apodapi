import SearchApi from "./SearchApi.js";

export default async function SearchStartDate({ start_date }){
    const response = await SearchApi({ start_date });

    const [Info, setInfo] = useState([]);

    useEffect(() => {
        response.json()
            .then(data => { setInfo(data); })
            .catch(error => { console.error(error); });
    }, []);

    return Info;
}