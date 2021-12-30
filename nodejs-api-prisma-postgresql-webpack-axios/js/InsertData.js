import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";

const InsertData = () => {
  const [teams, setTeams] = useState();
  const [driverField, setDriverField] = useState({
    teamId: "",
    firstName: "",
    lastName: "",
    carNumber: "",
  });

  const handleChange = (event) => {
    setDriverField((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const createDriver = async (values) => {
    try {
      console.log(values);
      const response = await axios.post(`/api/v1/drivers`, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: driverField,
    onSubmit: (values) => {
      createDriver(values);
    },
  });

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`/api/v1/teams`);
      console.log(response.data.data);
      setTeams(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-4"
      >
        <div className="w-full flex gap-8">
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full py-1 px-2 border"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Cognome</label>
            <input
              type="text"
              name="lastName"
              className="w-full py-1 px-2 border"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="w-full flex gap-8">
          <div>
            <label htmlFor="">Numero di macchina</label>
            <input
              type="number"
              name="carNumber"
              className="w-full py-1 px-2 border"
              value={formik.values.carNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Team</label>
            <select
              name="teamId"
              className="w-full py-1 px-2 border"
              value={formik.values.teamId}
              onChange={formik.handleChange}
            >
              {teams
                ? teams.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))
                : ""}
            </select>
          </div>
        </div>
        <div className="w-full">
          <button type="submit" className="px-8 py-2 bg-blue-600 text-white">
            SALVA
          </button>
        </div>
      </form>
    </div>
  );
};

export default InsertData;
