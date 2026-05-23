import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FacultyTable from "../components/FacultyTable";
import "../styles/faculty.css";

function Faculty() {
  const [facultyList, setFacultyList] = useState([]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  // LOAD FACULTY ON PAGE LOAD
  useEffect(() => {
    getFaculty();
  }, []);

  // GET FACULTY
  const getFaculty = async () => {
    try {
      const response = await fetch(
        "https://fms-backend-0fle.onrender.com/api/faculty"
      );

      const data = await response.json();
      setFacultyList(data);
    } catch (error) {
      console.error("Error fetching faculty:", error);
    }
  };

  // ADD OR UPDATE FACULTY
  const handleSubmit = async () => {
    const facultyData = {
      name,
      department,
      email,
    };

    try {
      if (editId) {
        // UPDATE
        await fetch(
          `https://fms-backend-0fle.onrender.com/api/faculty/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(facultyData),
          }
        );

        setEditId(null);
      } else {
        // ADD
        await fetch(
          "https://fms-backend-0fle.onrender.com/api/faculty",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(facultyData),
          }
        );
      }

      // refresh list
      getFaculty();

      // clear form
      setName("");
      setDepartment("");
      setEmail("");
    } catch (error) {
      console.error("Error saving faculty:", error);
    }
  };

  // DELETE FACULTY
  const deleteFaculty = async (id) => {
    try {
      await fetch(
        `https://fms-backend-0fle.onrender.com/api/faculty/${id}`,
        {
          method: "DELETE",
        }
      );

      getFaculty();
      console.log("hi");
    } catch (error) {
      console.error("Error deleting faculty:", error);
    }
  };

  // EDIT FACULTY (fill form)
  const editFaculty = (faculty) => {
    setName(faculty.name);
    setDepartment(faculty.department);
    setEmail(faculty.email);
    setEditId(faculty._id);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="faculty-content">
        <h1>Faculty Management</h1>

        {/* FORM */}
        <div className="faculty-form">
          <input
            type="text"
            placeholder="Faculty Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubmit}>
            {editId ? "Update Faculty" : "Add Faculty"}
          </button>
        </div>

        {/* TABLE */}
        <FacultyTable
          facultyList={facultyList}
          deleteFaculty={deleteFaculty}
          editFaculty={editFaculty}
        />
      </div>
    </div>
  );
}

export default Faculty;
