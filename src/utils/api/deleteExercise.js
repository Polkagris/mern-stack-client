import Axios from "axios";

async function deleteCall(token, exercise) {
  const response = await Axios.delete(
    `http://localhost:5000/training/delete-exercise`,
    {
      headers: {
        Authorization: token,
        token: token,
        exerciseId: exercise._id
      },
      data: {
        token: token,
        exerciseId: exercise._id
      }
    }
  );
  return response;
}

export default deleteCall;
