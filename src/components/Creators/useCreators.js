import { useEffect, useState } from "react";

export const useCreators = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const result = await response.json();
      const users = result.results.map((user) => ({
        ...user,
        isActive: Math.random() > 0.5,
      }));
      setData(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  return { data };
};
