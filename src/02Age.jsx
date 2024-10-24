
const Hello = ({ name, age}) =>{

    const bornYear = () => new Date().getFullYear() - age
    return(
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So were probably bor in {bornYear()}</p>
            <br />
        </div>
    )
}
const App = ()=>{
    const name = 'Peter'
    const age = 10
    return(
        <div>
            <h1>Gretings</h1>
            <Hello name={name} age={age} />
            <Hello name='Jarot' age={10 + 8} />
        </div>
    )
}

export default App