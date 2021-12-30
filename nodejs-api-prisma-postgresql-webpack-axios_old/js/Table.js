import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Table = () => {

    const [teams, setTeams] = useState();

    const fetchTeams = async () => {
        try {
            const response = await axios.get('/api/v1/teams');
            console.log(response.data);
            setTeams(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTeams()
    }, [])

  return (
    <div className="container mx-auto">
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;