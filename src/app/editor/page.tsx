"use client";

import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/dropdown/dropdown";
import { OutputBox } from "@/components/outputBox/output";
const editorPage = () => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("cpp");
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Output will be shown here");
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  async function sendRequest() {
    console.log(language, code, input, theme);
    // const response = await axios.post("http://localhost:8001/code/compile", {
    //   code,
    //   language_id: 71,
    //   input,
    // });
    // console.log(response.data);
    setOutput("Check console for the key");
    setInput("");
    setCode("");
  }
  return (
    <div className="flex h-screen bg-white">
      {/* Code Editor */}
      <div className="flex-1">
        <Editor
          language={language}
          defaultValue="// Start writing your code here"
          onMount={handleEditorDidMount}
          theme={theme}
          onChange={() => setCode(editorRef.current.getValue())}
          value={code}
        />
      </div>
      {/* Sidebar */}
      <div className="w-98 bg-gray-200 p-4">
        {/* Theme Selector */}
        <div>
        <Label htmlFor="theme">Theme</Label>
        <br />
        <ComboboxDemo value={theme} setValue={setTheme} />
        {/* Language Selector */}
        </div>
        <div>
        <Label htmlFor="language">Language</Label>
        <br />
        <ComboboxDemo value={theme} setValue={setTheme} />
        </div>
        
        {/* Button to Compile/Run Code */}
        
        {/* Output Display */}
        <OutputBox text={output}/>
        <div className="mt-20">
        <Label htmlFor="input">Input</Label>
        <br />
        <Textarea
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the Input"
        className="w-96"
        />
        <Button onClick={sendRequest} className="py-2 px-4 mt-4 ml-72">
          Run Code
        </Button>
        </div>
      </div>
    </div>
  );
};

export default editorPage;
