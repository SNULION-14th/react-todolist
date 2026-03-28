import { Link } from "react-router-dom";
import { format } from "date-fns";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoDummyData from "../data/dummy.json";
import CalenderIcon from "../assets/images/calendar.png";
import { useState, useEffect } from "react";
import TodoCreate from "../components/TodoCreate";

const HomePage = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const [todos, setTodos] = useState([]);

  const handleCreate = (text) => {
    // 기존 todos 중 가장 큰 id + 1을 새 id로 사용 (비어있으면 0)
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0;

    const newTodo = { id: newId, text, done: false };
    // 기존 todos를 복사하고 뒤에 newTodo를 추가
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setTodos(TodoDummyData[today] || []);
  }, []);

  return (
    <>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      <TodoCreate onCreate={handleCreate} />
      <Link to="/history">
        <img
          src={CalenderIcon}
          className="absolute w-15 right-8 bottom-10 opacity-20 hover:opacity-100 transition-opacity duration-120"
        />
      </Link>
    </>
  );
};

export default HomePage;
