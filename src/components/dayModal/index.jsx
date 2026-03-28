//components/DayModal/index.jsx
//DayModal 폴더 만들어서 index.jsx파일 만들기

import { format } from "date-fns";

// selectedDate: 선택된 날짜, onClose: 모달을 닫을 때 호출할 함수
const DayModal = ({ selectedDate, onClose }) => {
  return (
    <>
      {/* 어두운 배경 - 클릭하면 모달 닫힘 */}
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        {/* 모달 본체 - 클릭해도 닫히지 않도록 이벤트 전파 차단 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-80"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-semibold mb-4">
            {format(selectedDate, "yyyy-MM-dd")}
          </h2>
          <p className="text-gray-700 mb-6">안녕하세요!</p>
        </div>
      </div>
    </>
  );
};

export default DayModal;
