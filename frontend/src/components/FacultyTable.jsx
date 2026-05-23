function FacultyTable({ facultyList, editFaculty, deleteFaculty }) {
  return (
    <table className="faculty-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {facultyList.map((faculty) => (
          <tr key={faculty._id}>

            <td>{faculty.name}</td>
            <td>{faculty.department}</td>
            <td>{faculty.email}</td>

            <td>
              <button onClick={() => editFaculty(faculty)}>
                Edit
              </button>

              <button onClick={() => deleteFaculty(faculty._id)}>
                Delete
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default FacultyTable;
