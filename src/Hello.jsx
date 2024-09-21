import './Hello.css';
export default function Hello({fname,lname="jaidee",age=25}) {
    return (<>
        <h1>Hello World, {fname} {lname}{age} !!!</h1>     
        <hr></hr>
        </>
    );
}