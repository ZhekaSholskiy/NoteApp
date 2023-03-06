import styles from './notebodyeditor.module.css';
import { INote, useStoreActions, useStoreState } from '../../storeModel';

export function NoteBodyEditor() {
  const activeNote = useStoreState((state) => state.activeNote);
  const setActiveNote = useStoreActions((actions) => actions.setActiveNote);
  const changeBody = useStoreActions((actions) => actions.changeNoteBody);

  return (
    <div className={styles.container}>
        <textarea
         name=''
        className={styles.textarea}
                  placeholder='Здесь будет текст Вашей заметки'
                  value={activeNote ? activeNote.body : ''}
                  onChange={(event) => {
                    const updatedNote: INote = {
                      title: activeNote.title,
                      body: event.target.value,
                      id: activeNote.id,
                    }
                    changeBody(updatedNote);
                    setActiveNote(updatedNote);
                  }}
                  id='note-body-editor'
                  >
        </textarea>
    </div>
  );
}
