import { useCallback, useMemo, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const LiveSearch = () => {
  const [query, setquery] = useState("");
  const [users, setUsers] = useState([]);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    console.log("Fetched data in component:", data); // Add this line for debugging
    if (Array.isArray(data)) {
      setUsers(data);
    } else {
      setUsers([]);
    }
  }, [data]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, users]);

  const handleSearch = useCallback((e) => {
    setquery(e.target.value);
  }, []);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // Full viewport height
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginBottom: "20px",
      boxSizing: "border-box",
    },
    loading: {
      fontSize: "18px",
      color: "#888",
    },
    list: {
      listStyleType: "none",
      padding: "0",
      width: "100%", // Ensure the list takes full width
    },
    listItem: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    listItemHover: {
      backgroundColor: "#f0f0f0",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Live Search</h1>
      <input 
        value={query}
        type="text"
        onChange={handleSearch}
        style={styles.input}
        placeholder="Search users..."
      />
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              style={styles.listItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.listItemHover.backgroundColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
