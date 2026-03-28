import { useState } from "react";
import plus from "../../assets/images/plus.png";

const TodoCreate = ({ onCreate }) => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
  const handleTextInputChange = (e) => {
    setText(e.target.value); // input에 입력될 때마다 text state 업데이트
  };

  // 버튼 클릭 시 열림or닫힘 토글
  const handleCreateToggleButtonClick = () => {
    setOpen((open) => !open);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 동작(페이지 새로고침)을 막음
    if (text.trim()) {
      onCreate(text);
    }
    // 할 일을 만들면 바로 TodoCreate를 닫아줍니다.
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="absolute left-0 bottom-0 w-full z-5">
          <form className="insert-form" onSubmit={handleSubmit}>
            <input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={handleTextInputChange}
            />
          </form>
        </div>
      )}
      <button
        className={open ? "circle-button button-open" : "circle-button"}
        onClick={handleCreateToggleButtonClick}
      >
        <img src={plus} className="invert" />
      </button>
    </>
  );
};

export default TodoCreate;
