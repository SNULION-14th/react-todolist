import { useState } from "react";

const TodoItem = ({ text, done, onToggle, onRemove }) => {
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  const handleMouseOver = () => setIsRemoveIconVisible(true);
  const handleMouseLeave = () => setIsRemoveIconVisible(false);

  const handleCheckButtonClick = () => {
    onToggle();
  };
  const handleRemoveButtonClick = () => {
    onRemove();
  };
  return (
    <div
      className="flex items-center py-3 px-5"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={handleCheckButtonClick}
        className={done ? "check-circle circle-done" : "check-circle"}
      >
        {done ? "✓" : ""}
      </div>
      <div className={done ? "text text-done" : "text"}>{text}</div>
      <div
        className={`remove-icon ${isRemoveIconVisible ? "visible" : "invisible"}`}
        onClick={handleRemoveButtonClick}
      >
        삭제
      </div>
    </div>
  );
};

export default TodoItem;
