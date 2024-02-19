import { v4 as uuidv4 } from "uuid";
import { Board } from "../store/board.store";

export const addColumn = (name) => {
  Board.value.push({
    name,
    id: uuidv4(),
    tasks: [],
  });
};

export const deleteColumn = (id) => {
  Board.value = Board.value.filter((el) => el.id != id);
};

export const addTask = (name, i) => {
  Board.value[i].tasks.push({
    id: uuidv4(),
    name,
  });
};

export const deleteTask = (i, id) => {
  Board.value[i].tasks = Board.value[i].tasks.filter((el) => el.id != id);
};

export const updateTask = (name, i, id) => {
  const taskToUpdate = Board.value[i].tasks.find((task) => task.id === id);
  taskToUpdate.name = name;
};
