import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnecdoteVote } from "../src/reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../src/reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const voteAnecdote = async (id) => {
    try {
      dispatch(updateAnecdoteVote(id));
      dispatch(
        setNotificationWithTimeout(`you voted '${anecdote.content}'`, 5)
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return anecdotes.map((anecdote, index) => (
    <Anecdote key={index} anecdote={anecdote} />
  ));
};

export default AnecdoteList;
