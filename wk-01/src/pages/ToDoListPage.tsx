import ToDo from "@components/ToDo";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function ToDoListPage() {
  const [inputContent, setInputContent] = useState<string>("");
  const [contents, setContents] = useState<string[]>([]);

  function changeInputContent(event: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(event.target.value);
  }

  function addContent() {
    if (inputContent) {
      setInputContent("");
      setContents([...contents, inputContent]);
    } else {
      console.log("Input mustn't be empty string.");
    }
  }

  function updateContent(index: number, content: string) {
    contents[index] = content;
    setContents([...contents]);
  }

  function removeContent(index: number) {
    contents.splice(index, 1);
    setContents([...contents]);
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-white rounded drop-shadow-sm">
        <div className="flex flex-row gap-4">
          <div className="relative flex flex-row justify-center items-center bg-slate-200 w-12 aspect-square rounded-full overflow-hidden">
            <FaUser className="absolute text-4xl top-3 text-slate-400" />
          </div>
          <input
            className="flex-1 h-full px-4 outline-none rounded border ring-blue-200 ring-offset-2 focus:ring transition"
            type="text"
            value={inputContent}
            onChange={changeInputContent}
          />
        </div>
        <div className="flex flex-row justify-end gap-4">
          <button
            onClick={addContent}
            className="px-4 py-2 min-w-32 bg-blue-500 rounded text-white active:bg-blue-400 transition"
          >
            เพิ่ม
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-hidden drop-shadow-sm">
        <div className="text-slate-500 font-bold text-xl">Post List</div>
        <div className="flex flex-col gap-4 overflow-auto rounded">
          {contents.length ? (
            contents.map((content: string, index: number) => (
              <ToDo
                index={index}
                content={content}
                updateContent={updateContent}
                removeContent={removeContent}
              />
            ))
          ) : (
            <div className="flex flex-col items-center gap-4 p-4 bg-white rounded drop-shadow-sm">
              No post here
            </div>
          )}
        </div>
      </div>
    </>
  );
}
