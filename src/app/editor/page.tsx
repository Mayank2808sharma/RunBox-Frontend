"use client"
import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

function Page() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <main className="flex justify-between">
      <div className="w-1/2">
        <button className="mt-4" onClick={showValue}>
          Show value
        </button>
        <Editor
          height="90vh"
          width="50vw"
          defaultLanguage="cpp"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="input" className="block mt-4">Enter the input</label>
        <input type="text" id="input" className="block mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        <select name="language" id="language" className="block mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
    </main>
  );
}

export default Page;
