import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

interface PropType {
  index: number;
  content: string;
  updateContent: (index: number, content: string) => void;
  removeContent: (index: number) => void;
}

export default function ToDo({
  index,
  content,
  updateContent,
  removeContent,
}: PropType) {
  const [inputContent, setInputContent] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  function changeInputContent(event: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(event.target.value);
  }

  useEffect(() => {
    setInputContent(content);
  }, [content]);

  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-white rounded">
        <div className="flex flex-row gap-4">
          <div className="relative flex flex-row justify-center items-center bg-slate-200 w-12 aspect-square rounded-full overflow-hidden">
            <FaUser className="absolute text-4xl top-3 text-slate-400" />
          </div>
          {editMode ? (
            <input
              className="flex-1 h-full px-4 outline-none rounded border ring-blue-200 ring-offset-2 focus:ring transition"
              type="text"
              value={inputContent}
              onChange={changeInputContent}
            />
          ) : (
            <div className="flex flex-row items-center border border-t-2 border-white flex-1 h-full px-4">
              {inputContent}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-end gap-4">
          {editMode ? (
            <>
              <button
                className="px-4 py-2 min-w-32 bg-blue-500 rounded text-white active:bg-blue-400 transition"
                onClick={() => {
                  updateContent(index, inputContent);
                  setEditMode(false);
                }}
              >
                บันทึก
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 min-w-32 bg-slate-500 rounded text-white active:bg-slate-400 transition"
                onClick={() => {
                  setEditMode(true);
                }}
              >
                แก้ไข
              </button>
              <button
                className="px-4 py-2 min-w-32 bg-slate-500 rounded text-white active:bg-slate-400 transition"
                onClick={() => {
                  removeContent(index);
                }}
              >
                ลบ
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
