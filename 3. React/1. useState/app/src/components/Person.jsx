function Person({ name = "unknown", leeftijd, hobbies, children, className = "" }) {
    return (
        <div className={"person" + className}>
            <h1>{children}</h1>
            <h2>Naam : {name}</h2>
            {leeftijd >= 0 ? <h3>{leeftijd}</h3> : null}
            {hobbies && <p>Hobbies : {hobbies.join(", ")}</p>}
            <hr />
        </div>
    );
}


export default Person;