import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "./reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "./reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const [newAnecdote, setNewAnecdote] = useState("");

  const addAnecdote = async (e) => {
    e.preventDefault();
    if (newAnecdote === "") return;
    try {
      dispatch(createAnecdote(newAnecdote));
      setNewAnecdote("");
      dispatch(setNotificationWithTimeout(`you created '${newAnecdote}'`, 5));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button onClick={addAnecdote}>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
