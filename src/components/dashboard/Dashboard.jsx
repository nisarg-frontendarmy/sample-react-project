import React from "react";
import { useNavigate } from "react-router-dom";
import JSON from "../../students.json";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Dashboard = () => {
  const history = useNavigate();

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("studentId", {
      cell: (info) => "" + info.getValue(),
      header: "Student Id",
      id: "studentIdabcd",
    }),
    columnHelper.accessor("studentName", {
      header: "Student Name",
      id: "studentName",
      cell: (info) => (
        <div className="d-flex  ">
          <img
            src="/images/usericon.png"
            alt="User Icon"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "3px",
            }}
          />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("department", {
      header: "Department",
      id: "department",
      cell: (info) => {
        const department = info.getValue();
        let departmentClassName = "department-cell";

        // Conditionally set the ClassName based on the department Name
        if (department === "Computer Engineering") {
          departmentClassName = "department-Computer-Engineering";
        } else if (department === "Mechanical Engineering") {                   
          departmentClassName = "department-Mechanical-Engineering";
        } else if (department === "Electrical Engineering") {
          departmentClassName = "department-Electrical-Engineering";
        } else if (department === "Civil Engineering") {
          departmentClassName = "department-Civil-Engineering";
        } else if (department === "Information Technology") {
          departmentClassName = "department-Information-Technology";
        } else if (department === "Sociology") {
          departmentClassName = "department-Sociology";
        } else if (department === "Political Science") {
          departmentClassName = "department-Political-Science";
        } else if (department === "Music") {
          departmentClassName = "department-Music";
        } else if (department === "Philosophy") {
          departmentClassName = "department-Philosophy";
        } else if (department === "Biology") {
          departmentClassName = "department-Biology";
        } else if (department === "Mathematics") {
          departmentClassName = "department-Mathematics";
        } else if (department === "English Literature") {
          departmentClassName = "department-English-Literature";
        } else if (department === "Chemistry") {
          departmentClassName = "department-Chemistry";
        } else if (department === "History") {
          departmentClassName = "department-history";
        }

        return (
          <div className="p-3">
            <span className={departmentClassName}>{info.getValue()}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("courseName", {
      header: "Course Name",
      id: "courseName",
      cell: (info) => {
        const courseColorMapping = {
          "Cyber Secuirty": "#ed0936fb", 
          "Python": "#6499E9",     
          "JavaScript": "#ed0936fb", 
          "Php":"#3a62be",
          "Fundamental":"#6499E9",
          "Cascading Style Sheet":"#3a62be",
          "Graphics Designer":"#5B0888",
          "Android Developer":"#451952",
          "Game Developer":"#5B0888",
          "Java Develper":"#451952",
          "Web Developer":"#F11A7B",
          "Php Developer":"#65451F",
          "Ethical Hacker":"#F11A7B",
        };
        
        const courseName = info.getValue();
        const dotColor = courseColorMapping[courseName] || "#000000"; // Default to black if no match
    
        return (
          <div className="d-flex align-items-center">
            <span className="dot m-2" style={{ backgroundColor: dotColor }}></span>
            {courseName}
          </div>
        );
      },
    }),
    columnHelper.accessor("instituteName", {
      header: "Name Of Institute",
      id: "instituteName",
    }),
    columnHelper.accessor("ViewDetails", {
      header: "Actions",
      id: "ViewDetails",
    }),
  ];

  const data = React.useMemo(() => JSON.Dashboard, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleViewDetailsClick = (studentId) => {
    history(`/SingleStudent?${studentId}`);
  };

  return (
    <div className="text-center w-100 vh-100  main-div19">
      <div className="fs-2 mb-4 text-white ">Welcome to Student Lists Page</div>
      <table className="table w-100 vh-50 mx-auto main-div22">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="gap-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {cell.column.id === "ViewDetails" && (
                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        handleViewDetailsClick(row.original.studentId)
                      }
                    >
                      View Details
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
