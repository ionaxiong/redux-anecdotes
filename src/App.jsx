import { useEffect } from "react";
import AnecdoteForm from "../src/components/AnecdoteForm";
import AnecdoteList from "../src/components/AnecdoteList";
import AnecdoteFilter from "../src/components/AnecdoteFilter";
import Notification from "../src/components/Notification";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
