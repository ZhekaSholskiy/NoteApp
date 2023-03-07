import styles from './notebodyeditor.module.css';
import LexicalEditor from './LexicalEditor/LexicalEditor';

export function NoteBodyEditor() {
  return (
    <div className={styles.container}>
        <LexicalEditor />
    </div>
  );
}
