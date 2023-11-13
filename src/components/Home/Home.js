import { useSelector } from "react-redux";
import Buttons from "../Buttons/Buttons";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {

    const tables = useSelector(state => state.tables);
    
    if (tables.length===0)
    return ( 
    <h2>Loading</h2>
    )

    return (

        <div >    
            <h1 className={styles.title}>All tables</h1>  
            {tables.map(table => (
                <Link className={styles.home} to = {'/table/'+ table.id} key={table.id}>
                    <h2 className={styles.h2} >Table {table.id}</h2>
                    <p className={styles.p}>status: {table.status}</p>
                    <Buttons className={styles.button}>Show more</Buttons>
                </Link>
            )
            )
            }
            
        </div>
        
    );
};
export default Home;

