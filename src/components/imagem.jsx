export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "15px" }}
        />
    )
}