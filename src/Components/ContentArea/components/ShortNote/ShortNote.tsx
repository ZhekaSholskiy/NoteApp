import styles from './shortnote.module.css';
import { useEffect } from 'react';
import {INote} from "../../../../types";
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, setActiveNote} from "../../../../Views/App/store/notesSlice";
import {RootState} from "../../../../reduxStore";

export function ShortNote(props: {note: INote}) {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);
  const activeNote = useSelector((state: RootState) => state.notes.activeNote);

  function removeNote() {
    dispatch(deleteNote(props.note));
  }

  useEffect(() => {
    // если при удалении заметк открыта в окне редактирования, переключаемся на первую заметку в сторе
    if (!notes.includes(activeNote)) {
      setActiveNote(notes[0])
    }
  }, [notes.length])

  const handleActiveNoteClick = () => dispatch(setActiveNote(props.note));

  return (
    <div className={styles.container}
         onClick={handleActiveNoteClick}
    >
      <span className={styles.noteTitle}>
        {props.note.title}
      </span>
      <svg className={styles.removeButton}
           onClick={removeNote}
           xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
        <path fill='gray' fillRule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/>
      </svg>
    </div>
  );
}
