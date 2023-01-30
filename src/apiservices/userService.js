import axiosConfig from "./axios-config";


export const getUserDetails = async (email) => {
  console.log("Calling Login API Service");
  console.log(email);
  const data = await axiosConfig
    .get(`/user/userdetails/${email}/`)
    .then(async (response) => {
      console.log('User Details Response')
      console.log(response)
      return response;
    })
    .catch((error) => {
      return error;
    });

  return data;
};

