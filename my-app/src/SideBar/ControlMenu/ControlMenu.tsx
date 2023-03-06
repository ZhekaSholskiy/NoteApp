import { useStoreActions } from '../../storeModel';
import { generateId } from '../../utils/generateId';
import './controlmenu.css'

export function ControlMenu() {
  const addNote = useStoreActions((actions) => actions.addNote);
  const setActiveNote = useStoreActions((actions) => actions.setActiveNote);

  function createNewNote(noteId: string) {
    return {
      title: '',
      body: '',
      id: noteId,
    }
  }

  function createAndSaveNote() {
    const newNote = createNewNote(generateId());
    addNote(newNote);
    setActiveNote(newNote);
    document.getElementById('title-editor')?.focus();
  }

  return <div className='control-menu-container'>
            <button className='add-note-button' onClick={() => createAndSaveNote()}>
              <svg viewBox="0 0 24 24" >
                <g>
                  <path d="M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9c4.96,0,9-4.04,9-9S16.96,3,12,3 M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2L12,2z">
                  </path>
                </g>
              </svg>
            </button>
  </div>
}
