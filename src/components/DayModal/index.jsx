import { format } from "date-fns";

const DayModal = ({ selectedDate, onClose }) => {
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
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
