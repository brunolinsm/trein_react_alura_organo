import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const labelModificada = `${props.label}`
    const placeholderModificada = `${props.placeholder}...`
    
    return(
        <div className="campo-texto">
            <label>
                {labelModificada}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;