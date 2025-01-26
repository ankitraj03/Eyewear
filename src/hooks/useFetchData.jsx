import { useState, useEffect } from "react";

const useFetchData = (fileName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Directly use the relative path for the file in the public directory
          const response = await fetch(`/${fileName}`);
          
          // Check if the response is ok
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
          }
          
          const result = await response.json();
          setData(result);  // Set the data state with the fetched JSON
        } catch (err) {
          setError(err.message);  // Set error message if there’s an issue
        } finally {
          setLoading(false);  // Set loading to false after fetching completes
        }
      };
  
      fetchData();
    }, [fileName]);
  
    return { data, loading, error };  // Return data, loading, and error states
  };
  

export default useFetchData;
