export const fetchFromExternalAPI = async (id) => {
  try {
    const response = await fetch("https://ntifoodpeople.vercel.app/api/users");
    const users = await response.json();

    const user = users.find((u) => u.scanId === id);
    if (user) {
      return {
        namn: user.username, 
        isPersonal: user.teacher, 
        creator: false, 
      };
    }
    return null; 
  } catch (error) {
    console.error("Error fetching from external API:", error);
    return null;
  }
};
