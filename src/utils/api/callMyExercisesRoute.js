import Axios from "axios";

const callMyExercisesRoute = async token => {
  const response = await Axios.post(
    `http://localhost:5000/training/`,
    { token: token },
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response;
};

export default callMyExercisesRoute;
