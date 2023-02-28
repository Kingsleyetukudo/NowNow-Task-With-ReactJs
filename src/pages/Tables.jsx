import React, { useEffect, useState } from "react";
import Table from "react-data-table-component";
// import CheckBox from "@material-ui/core/Checkbox";

export default function Tables() {
  const columns = [
    {
      name: "Organization",
      id: "header",
      selector: (row) => row.orgName,
    },
    {
      name: "UserName",
      id: "header",
      selector: (row) => row.userName,
    },
    {
      name: "Email",
      id: "header",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number",
      id: "header",
      selector: (row) => row.profile.phoneNumber,
    },
    {
      name: "Date Join",
      id: "header",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
    {
      name: "Status",
      id: "header",
      selector: (row) => row.userName,
    },
    {
      name: "Action",
      id: "header",
      sortable: false,

      cell: (row) => (
        <div className="flex gap-5">
          {visibility ? (
            <i
              className="material-icons cursor-pointer"
              onClick={() => handleVisibility(row)}>
              visibility
            </i>
          ) : (
            <i
              className="material-icons cursor-pointer"
              onClick={() => handleVisibility(row)}>
              visibility_off
            </i>
          )}

          <i
            className="material-icons cursor-pointer"
            onClick={() => handleDelete(row)}>
            delete
          </i>
        </div>
      ),
    },
  ];

  const [visibility, setVisibility] = useState(true);

  const handleVisibility = (r) => {
    setVisibility((visibility) => !visibility);
  };

  const handleDelete = (r) => {
    setData(
      data.filter((det) => {
        return det.id !== r.id;
      })
    );
    console.log(r.id);
  };

  const [data, setData] = useState([]);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  const selectProps = () => {
    setIsIndeterminate((on) => !on);
  };

  //   const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="w-90 m-auto mt-6">
      <Table
        rdt_TableBody
        columns={columns}
        data={data}
        pagination
        selectableRows
        // selectableRowsComponent={""}
        selectableRowsComponentProps={selectProps}
      />
    </div>
  );
}
