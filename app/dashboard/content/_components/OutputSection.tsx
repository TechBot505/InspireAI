import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

function OutputSection() {
  const editorRef = useRef<any>(null);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between item-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2"><Copy/>Copy</Button>
      </div>
      <Editor
      ref={editorRef}
        initialValue="Your AI generated content will appear here..."
        height="450px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {}}
      />
    </div>
  );
}

export default OutputSection;
