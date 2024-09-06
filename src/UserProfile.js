import "./UserProfile.css"


function UserProfile(){

  
    return(
        <>
        <div className="wrapper">
        <h1 className="title">Nevermore: Nightshades Student Profile</h1>
        <div className="card-container1">
            <div className="card" >
                <img src={require("./images/wednesday.jpg")} alt="Wednesday Addams" className="img"/>
                <h2>Wednesday Addams</h2>
                <p>Age: 16 years old</p>
                <p>Species: Psychic</p>
            </div>

            <div className="card">
                <img src={require("./images/enid.jpg")} alt="Enid Sinclair" className="img"/>
                <h2>Enid Sinclair</h2>
                <p>Age: 16 years old</p>
                <p>Species: Werewolf</p>
            </div>

            <div className="card">
                <img src={require("./images/bianca.jpg")} alt="Enid Sinclair" className="img"/>
                <h2>Bianca Barclay</h2>
                <p>Age: 16 years old</p>
                <p>Species: Siren</p>
            </div>

            <div className="card">
                <img src={require("./images/yoko.jpg")} alt="Enid Sinclair" className="img"/>
                <h2>Yoko Tanaka</h2>
                <p>Age: 16 years old</p>
                <p>Species: Vampire</p>
            </div>
        </div>

        <div className="card-container2">
            <div className="card">
                    <img src={require("./images/divina.jpg")} alt="Enid Sinclair" className="img"/>
                    <h2>Divina</h2>
                    <p>Age: 16 years old</p>
                    <p>Species: Siren</p>
            </div>

            <div className="card">
                    <img src={require("./images/kent.jpg")} alt="Enid Sinclair" className="img"/>
                    <h2>Kent</h2>
                    <p>Age: 16 years old</p>
                    <p>Species: Siren</p>
            </div>

            <div className="card">
                    <img src={require("./images/ajax.jpg")} alt="Enid Sinclair" className="img"/>
                    <h2>Ajax Petropolis</h2>
                    <p>Age: 16 years old</p>
                    <p>Species: Gorgon</p>
            </div>

            <div className="card">
                    <img src={require("./images/xavier.jpg")} alt="Enid Sinclair" className="img"/>
                    <h2>Xavier Thorpe</h2>
                    <p>Age: 16 years old</p>
                    <p>Species: Psychic</p>
            </div>
        </div>
        </div>

        </>
    );
}

export default UserProfile