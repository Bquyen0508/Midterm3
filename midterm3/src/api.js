import axios from "axios";

const GetUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
      const data = response.data;
      return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

 const SearchUsers = async (text) => {
   try {
     const response = await axios.get(
       `https://api.github.com/search/users?q=${text} `
     );
     return response.data.items;
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };
    

  const GetUserRepos = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const data = response.data;
        // setUser(data)
        return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
};
  
export { GetUser, SearchUsers, GetUserRepos };