import { useState } from "react";

export const Datatable = () => {
  const userdata = [
    { id: 1, name: "John Doe", email: "john.doe@mail.com", age: 28 },
    { id: 2, name: "Alice Smith", email: "alice.smith@mail.com", age: 32 },
    { id: 3, name: "Michael Brown", email: "michael.brown@mail.com", age: 24 },
    { id: 4, name: "Emma Johnson", email: "emma.johnson@mail.com", age: 29 },
    { id: 5, name: "David Wilson", email: "david.wilson@mail.com", age: 35 },
    {
      id: 6,
      name: "Sophia Martinez",
      email: "sophia.martinez@mail.com",
      age: 27,
    },
    {
      id: 7,
      name: "Daniel Anderson",
      email: "daniel.anderson@mail.com",
      age: 31,
    },
    { id: 8, name: "Olivia Thomas", email: "olivia.thomas@mail.com", age: 26 },
    { id: 9, name: "James Taylor", email: "james.taylor@mail.com", age: 33 },
    {
      id: 10,
      name: "Isabella Moore",
      email: "isabella.moore@mail.com",
      age: 30,
    },
    {
      id: 11,
      name: "Benjamin Harris",
      email: "benjamin.harris@mail.com",
      age: 22,
    },
    { id: 12, name: "Mia Clark", email: "mia.clark@mail.com", age: 34 },
    { id: 13, name: "Lucas Lewis", email: "lucas.lewis@mail.com", age: 25 },
    {
      id: 14,
      name: "Charlotte Walker",
      email: "charlotte.walker@mail.com",
      age: 29,
    },
    { id: 15, name: "Henry Hall", email: "henry.hall@mail.com", age: 36 },
    { id: 16, name: "Amelia Allen", email: "amelia.allen@mail.com", age: 28 },
    {
      id: 17,
      name: "Alexander Young",
      email: "alexander.young@mail.com",
      age: 27,
    },
    { id: 18, name: "Harper King", email: "harper.king@mail.com", age: 23 },
    { id: 19, name: "Ethan Wright", email: "ethan.wright@mail.com", age: 31 },
    { id: 20, name: "Ava Scott", email: "ava.scott@mail.com", age: 26 },
    {
      id: 21,
      name: "Sebastian Green",
      email: "sebastian.green@mail.com",
      age: 34,
    },
    { id: 22, name: "Luna Adams", email: "luna.adams@mail.com", age: 24 },
    { id: 23, name: "Jack Baker", email: "jack.baker@mail.com", age: 29 },
    { id: 24, name: "Ella Nelson", email: "ella.nelson@mail.com", age: 32 },
    {
      id: 25,
      name: "William Carter",
      email: "william.carter@mail.com",
      age: 30,
    },
  ];
  const [searchtext, setSearchText] = useState("");
  const [nameFilter, setNameFilter] = useState("ascending");
  const [ageFilter, setAgeFilter] = useState("ascending");
  const [page, setPage] = useState(0);
  const limit = 5;
  const [results, setResults] = useState([]);
  const handleSearch = () => {
    const users = userdata.filter((data) => {
      return (
        data.name.toLowerCase().includes(searchtext.toLowerCase()) ||
        data.email.toLowerCase().includes(searchtext.toLowerCase())
      );
    });
    setResults(users);
    console.log(users);
  };

  const handleAge = () => {
    if (ageFilter === "ascending") {
      setAgeFilter("descending");
      const temp = results.sort((a, b) => b.age - a.age);
      setResults(temp);
    } else if (ageFilter === "descending") {
      setAgeFilter("ascending");
      const temp = results.sort((a, b) => a.age - b.age);
      setResults(temp);
    }
  };

  const handleName = () => {
    if (nameFilter === "ascending") {
      setNameFilter("descending");
      const temp = results.map((item) => {
        item.name.sort();
      });
      setResults(temp);
    } else if (nameFilter === "descending") {
      setNameFilter("ascending");
      const temparr = results.sort((b, a) => b.name - a.name);
      setResults(temparr);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-2xl">Search User Data </p>
      <div>
        <input
          type="text"
          id="search"
          className="border rounded-lg m-3 p-2"
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="p-2 rounded-lg bg-red-200" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div>
        <table>
          <thead>
            <tr className="flex justify-between bg-gray-200 p-4 rounded-lg w-200 m-2">
              <td className="font-bold" onClick={handleName}>
                Name
              </td>
              <td className="font-bold">Email</td>
              <td className="font-bold" onClick={handleAge}>
                Age
              </td>
            </tr>
          </thead>
          <tbody>
            {results.slice(page, page + limit).map((item) => (
              <tr
                key={item.id}
                className="flex justify-between bg-gray-200 p-4 rounded-lg w-200 m-2"
              >
                <td className="font-bold">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
