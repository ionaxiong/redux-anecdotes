import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ notification }) => {
    return notification;
  });

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  notification === "" ? (style.display = "none") : (style.display = "");
  return <div style={style}>{notification}</div>;
};

export default Notification;
