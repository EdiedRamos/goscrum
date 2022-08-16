import { Input } from "../";

import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setTitle, search } from "../../Services/Store/Actions/tasksActions";

const debounce = (callback, time) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, time);
  };
};

const myTimer = debounce((title, dispatch) => {
  dispatch(setTitle(title));
  dispatch(search());
}, 1000);

const TaskSearch = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  useEffect(() => {
    myTimer(search, dispatch);
  }, [search]);
  return (
    <>
      <Input
        placeholder="Seleccionar por título..."
        change={(evt) => {
          setSearch(() => evt.target.value);
        }}
      />
    </>
  );
};

export default TaskSearch;
