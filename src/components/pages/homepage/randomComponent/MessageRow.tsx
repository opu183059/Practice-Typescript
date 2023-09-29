import { useAppDispatch } from "../../../../store/app/hook";
import { removeMessage } from "../../../../store/slices/messageSlice";
import { message } from "../../../interface/interface";

interface messageProps {
  messageData: message;
}

const MessageRow = ({ messageData }: messageProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-72 bg-white/40 hover:bg-white/60 p-5 rounded-md">
      <h1>Name: {messageData.name}</h1>
      <p>Message: {messageData.message}</p>
      <button
        onClick={() => {
          dispatch(removeMessage(messageData.id));
        }}
        className="btn-sm bg-red-300 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default MessageRow;
