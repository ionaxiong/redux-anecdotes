import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload);
    },

    vote(state, action) {
      return state
        .map((anecdote) => (anecdote.id !== action.payload.id ? anecdote : action.payload))
        .sort((a, b) => b.votes - a.votes);
    },

    setAnecdotes(state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes);
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addAnecdote, vote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdoteVote = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateVotes(id);
    dispatch(vote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
