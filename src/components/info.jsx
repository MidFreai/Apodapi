export default function Info({nome="", descricao=""}){
    return(
        <div className="info">
            <h2 style={{ margin: "0", fontSize: "1.2rem", color: "#333" }}>{ nome }</h2>
            <p style={{ color: "#666", fontSize: "0.9rem", margin: "5px 0 15px 0" }}>{ descricao }</p>
        </div>
    )
}