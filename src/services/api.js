import {useEffect} from "react";
import { useState } from "react";
import axios from "axios";

function Studentlist() {
    const [students , setStudents] = useState([]);
    useEffect(() => {
        axios.get("https://thetestingworldapi.com/api/studentsDetails")
        .then((response) => {
            console.log(response)
            setStudents(response.data);
        })
    },[]);
}

export default Studentlist;