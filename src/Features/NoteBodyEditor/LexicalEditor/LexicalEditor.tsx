import "./styles.css";
import ExampleTheme from "./theme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
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

import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { useEffect, useRef, useState } from "react";
import { EditorState } from "lexical";
import {INote} from "../../../types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../reduxStore";
import {changeNoteBody, setActiveNote} from "../../../Views/Editor/store/notesSlice";

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
  const activeNote = useSelector((state: RootState) => state.notes.activeNote);
  const dispatch = useDispatch();
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
              dispatch(changeNoteBody(updatedNote));
              dispatch(setActiveNote(updatedNote));
            }}/>
          <HistoryPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
