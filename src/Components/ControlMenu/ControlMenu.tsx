import { generateId } from '../../utils/generateId';
import './controlmenu.css'
import {useDispatch} from "react-redux";
import {addNote, setActiveNote} from "../../Views/Editor/store/notesSlice";

export function ControlMenu() {
  const dispatch = useDispatch();

  function createNewNote(noteId: string) {
    return {
      title: '',
      body: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      id: noteId,
    }
  }

  function createAndSaveNote() {
    const newNote = createNewNote(generateId());
    dispatch(addNote(newNote));
    dispatch(setActiveNote(newNote));
    document.getElementById('title-editor')?.focus();
  }

  return <div className='control-menu-container'>
            <button className='add-note-button' onClick={createAndSaveNote}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
            </button>
  </div>
}
