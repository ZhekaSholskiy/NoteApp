import styles from './titleeditor.module.css';
import {ReactElement} from "react";
import {INote} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reduxStore";
import {changeNoteTitle, setActiveNote} from "../../Views/Editor/store/notesSlice";

export const TitleEditor = ():ReactElement => {
  const activeNote = useSelector((state: RootState) => state.notes.activeNote);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <input
          type="text"
          placeholder='Название заметки'
          className={styles.input}
          value={activeNote ? activeNote.title : ''}
          id='title-editor'
          onChange={(event) => {
                const updatedNote: INote = {
                  title: event?.target.value,
                  body: activeNote.body,
                  id: activeNote.id,
                }
                dispatch(changeNoteTitle(updatedNote));
                dispatch(setActiveNote(updatedNote));
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                const editingBodyArea = document.getElementsByClassName('editor-input')[0] as HTMLElement;
                editingBodyArea.focus();
              }
            }}/>
    </div>
  );
}
