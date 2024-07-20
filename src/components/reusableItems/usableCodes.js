import "./index.css"

 const TwoLines = prop =>{
    const{heading,paragraph} = prop
    return(<div className="two-lines-container">
        <h1 className="heading-two">{heading}</h1>
        <p className="booking-paragraph">{paragraph}</p>
    </div>)
}

export default TwoLines
