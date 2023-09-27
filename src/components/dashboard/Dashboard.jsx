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
      Header: "StudentId",
      id: "studentId",
    }),
    columnHelper.accessor("studentName", {
      Header: "StudentName",
      id: "studentName",
    }),
    columnHelper.accessor("department", {
      Header: "Department",
      id: "department",
    }),
    columnHelper.accessor("courseName", {
      Header: "CourseName",
      id: "courseName",
    }),
    columnHelper.accessor("instituteName", {
      Header: "Name Of Institute",
      id: "instituteName",
    }),
    columnHelper.accessor("ViewDetails", {
      Header: "View Full Details",
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
      <div className="fs-2 mb-4 text-white">Welcome to Student Lists Page</div>
      <table className="table w-75 mx-auto ">
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
                <td key={cell.id}>
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
