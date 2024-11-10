"use client" 

import { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";

function usePropertyList() {
  const [lists, setLists] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const fetchUserList = async () => {
    try {
      const listData = await axiosInstance.get("/all-draft");
      setLists(listData.data);
    } catch (error) {
      console.error("Error fetching property list:", error);
    }
  };

  const selectProperty = (property) => {
    setSelectedProperty(property);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return {
    lists,
    selectedProperty,
    selectProperty,
  };
}

export default usePropertyList;
