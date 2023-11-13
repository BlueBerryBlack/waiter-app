import InputForm from "../InputForm/InputForm";
import TextInput from "../TextInput/TextInput";
import Buttons from '../Buttons/Buttons';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/tablesRedux";
import { ApiURL } from "../../config";

const Table = () => {
    const tableId = useParams().tableId;
    const table = useSelector(state => state.tables.find(table=>table.id===tableId));
    const [status, setStatus] = useState(table?.status||'busy');
    const [bill, setBill] = useState(table?.bill||0);
    const [peopleAmount, setPeopleAmount] = useState(table?.peopleAmount||0);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table?.maxPeopleAmount||0); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allSubmit =(e) => {
        e.preventDefault();
        fetch(ApiURL+"/tables/"+ table.id,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status, peopleAmount, maxPeopleAmount,bill})
        })
        .then(()=> {
            dispatch(updateTable({status, peopleAmount, maxPeopleAmount, bill, id:table.id}))
            navigate('/')
        })
    }

    useEffect(() => {
        if (peopleAmount > maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        }
    }, [peopleAmount, maxPeopleAmount]);

    useEffect(() => {
        if (bill < 0) {
            setBill(0);
        }
    }, [bill]);

    useEffect(() => {
        if (status === "free") {
            setBill(0);
        }
    }, [status]);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        if (newStatus === "free") {
            setBill(0);
        }
    };

    return(    
        <form onSubmit={allSubmit}>
            <h3>Table {table.id}</h3>
            <p>Status:</p><InputForm value={status} onChange={e => handleStatusChange(e.target.value)}></InputForm>
           {status}
            {status !== "free" && (
                <div>
                    <p>People:</p><TextInput type="number" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}></TextInput>
                    <p>/</p> <TextInput type="number" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)}></TextInput> 
                    <p>Bill: $</p><TextInput type="number" value={bill} onChange={e => setBill(e.target.value)}></TextInput> 
                </div>
            )}

            <Buttons>Update</Buttons>
        </form>
    );
};

export default Table;