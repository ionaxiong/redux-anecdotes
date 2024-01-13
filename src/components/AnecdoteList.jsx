import { useSelector, useDispatch } from "react-redux";
import { updateAnecdoteVote } from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";
import PropTypes from "prop-types";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const voteAnecdote = async (id) => {
    try {
      dispatch(updateAnecdoteVote(id));
      dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 5));
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

  return anecdotes.map((anecdote, index) => <Anecdote key={index} anecdote={anecdote} />);
};

Anecdote.propTypes = {
  anecdote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

export default AnecdoteList;
