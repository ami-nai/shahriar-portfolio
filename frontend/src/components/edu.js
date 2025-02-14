
const fetchEdus = async (setEdus) => {
  try {
    const response = await fetch("http://localhost:5000/api/edu");
    const data = await response.json();
    if (response.ok) {
      setEdus(data);
    } else {
      console.error("Failed to fetch edus:", data.message);
    }
  } catch (error) {
    console.error("Error fetching edus:", error);
  }
};



export { fetchEdus };



