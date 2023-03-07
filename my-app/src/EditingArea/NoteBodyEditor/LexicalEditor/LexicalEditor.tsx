import "./styles.css";
import ExampleTheme from "./theme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { useEffect, useRef, useState } from "react";
import { EditorState } from "lexical";
import { INote, useStoreActions, useStoreState } from "../../../storeModel";

function Placeholder() {
  return <div className="editor-placeholder">Введите текст...</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ],
  namespace: 'MyEditor',
};

export default function LexicalEditor() {
  const editorStateRef = useRef<EditorState>();
  const activeNote = useStoreState((state) => state.activeNote);
  const setActiveNote = useStoreActions((actions) => actions.setActiveNote);
  const changeBody = useStoreActions((actions) => actions.changeNoteBody);
  const [uniqActiveNote, setUniqActiveNote] = useState(activeNote);

  useEffect(() => {
    if (activeNote.id !== uniqActiveNote.id) {
      setUniqActiveNote(activeNote);
    }
  }, [activeNote])

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin activeNote={uniqActiveNote}/>
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={editorState => {
              editorStateRef.current = editorState;
              const serState = JSON.stringify(editorStateRef.current);
              const updatedNote: INote = {
                title: activeNote.title,
                body: serState,
                id: activeNote.id,
              }
              changeBody(updatedNote);
              setActiveNote(updatedNote);
            }}/>
          <HistoryPlugin />
          {/* <AutoFocusPlugin /> */}
          {/* <CodeHighlightPlugin /> */}
          {/* <ListPlugin /> */}
          <LinkPlugin />
          <AutoLinkPlugin />
          {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
