/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const UserTable = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Account Number</th>
              <th className="border px-4 py-2">PIN</th>
              <th className="border px-4 py-2">Six Digits</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Loan Amount</th>
              <th className="border px-4 py-2">Payback Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row[0]} className="bg-white hover:bg-gray-100">
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className="border px-4 py-2 whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserTable;