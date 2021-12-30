import React, { useState, useEffect } from "react";
import axios from "axios";
import InsertData from "./InsertData";
const Table = () => {
  const [drivers, setDrivers] = useState();

  const fetchDrivers = async () => {
    try {
      const response = await axios.get(`/api/v1/drivers`);
      console.log(response.data.data);
      setDrivers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDriver = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/drivers/${id}`);
      console.log(response);
      fetchDrivers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <InsertData />
      <table class="table-fixed w-full">
        <thead>
          <tr className="py-2 font-bold">
            <th>Driver</th>
            <th>Team</th>
            <th>Car Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {drivers
            ? drivers.map((item) => (
                <tr className="py-2">
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.team.name}</td>
                  <td>{item.carNumber}</td>
                  <td>
                    <button
                      className="bg-red-600 px-2 py-1 text-white"
                      onClick={() => deleteDriver(item.id)}
                    >
                      cancella
                    </button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
