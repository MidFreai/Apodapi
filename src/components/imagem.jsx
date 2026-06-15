export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "80%", height: "80%", marginBottom: "15px",marginTop: "15px", }}
        />
    )
}