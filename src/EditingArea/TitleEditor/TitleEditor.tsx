import styles from './titleeditor.module.css';
import { INote, useStoreActions, useStoreState } from '../../storeModel';
import { useEffect } from 'react';

export function TitleEditor() {
  const activeNote = useStoreState((state) => state.activeNote);
  const setActiveNote = useStoreActions((actions) => actions.setActiveNote);
  const changeTitle = useStoreActions((actions) => actions.changeNoteTitle);

  return (
    <div className={styles.container}>
      <input type="text"
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
                changeTitle(updatedNote);
                setActiveNote(updatedNote);
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                const editingBodyArea = document.getElementsByClassName('editor-input')[0] as HTMLElement;
                editingBodyArea.focus();
              }
            }}
             />
    </div>
  );
}
