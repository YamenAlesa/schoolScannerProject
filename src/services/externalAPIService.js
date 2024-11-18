export const fetchFromExternalAPI = async (id) => {
  const response = await fetch("https://ntifoodpeople.vercel.app/api/users");
  const users = await response.json();

  const user = users.find((u) => u.scanId === id);
  return user
    ? {
        namn: user.username,
        isPersonal: user.teacher,
        creator: false,
      }
    : null;
};
