import axios from "axios";

const baseUrl = "http://localhost:3000/anecdotes";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error with get all anecdotes: ", error);
  }
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  try {
    const response = await axios.post(baseUrl, object);
    return response.data;
  } catch (error) {
    console.error("Error with create new anecdote: ", error);
  }
};

const updateVotes = async (id) => {
  try {
    const response = await axios.get(baseUrl + "/" + id);
    const anecdote = response.data;
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const updatedAnecdoteResponse = await axios.put(baseUrl + "/" + id, updatedAnecdote);
    return updatedAnecdoteResponse.data;
  } catch (error) {
    console.error("Error with update votes: ", error);
  }
};

export default { getAll, createNew, updateVotes };
