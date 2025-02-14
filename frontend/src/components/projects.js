const fetchProjects = async (setProjects) => {
    try{
       const response = await fetch("http://localhost:5000/api/projects");
       const data = await response.json();
       if(response.ok){
        setProjects(data);
       } 
       else{
        console.error("Failed to fetch projects:", data.message);
       }
    }catch(error){
        console.error("Error fetching projects:", error);
       }
}

export { fetchProjects };