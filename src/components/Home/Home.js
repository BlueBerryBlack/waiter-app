import { useSelector } from "react-redux";
import Buttons from "../Buttons/Buttons";
import { Link } from "react-router-dom";


const Home = () => {

    const tables = useSelector(state => state.tables);
    
    return (

        <div >    
            <h1>All tables</h1>  
            {tables.map(table => (
                <Link to = {'/table/'+ table.id} >
                    <h2>Table {table.id}</h2>
                    <p>status: {table.status}</p>
                </Link>

            ))}
            
            <Buttons>Show more</Buttons>
        </div>
        
    );
};
export default Home;

