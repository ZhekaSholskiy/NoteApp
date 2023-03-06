import { createStore, action } from 'easy-peasy';
import { INote, INotesModel } from './storeModel';
import { generateId } from './utils/generateId';

// localStorage.clear()

const LOCAL_STORAGE_KEY = 'noteApplication-qmvp-123f-1fh4-1s1d1';
const localStorageData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) as string);

// если это первый запуск приложения, выводим стандартную заметку
if (!localStorageData) {
  const initialNote: INote = {
    title: 'Привет!',
    body: 'Это приложение заметок. Здесь можно создавать новые заметки с помощью кнопки "Создать новую заметку" (плюс) в меню слева. В данной области можно редактировать существующие заметки.',
    id: generateId(),
  }
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([initialNote]));
}

export function saveToLocalStorage(notes: INote[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
}

export const store = createStore<INotesModel>({
  notes: localStorageData,
  activeNote: localStorageData[0],
  addNote: action((state, payload) => {
    state.notes.unshift(payload);
  }),
  setActiveNote: action((state, payload) => {
    state.activeNote = payload;
  }),
  changeNoteTitle: action((state, payload) => {
    state.notes[state.notes.findIndex(el => el.id === payload.id)].title = payload.title;
  }),
  changeNoteBody: action((state, payload) => {
    state.notes[state.notes.findIndex(el => el.id === payload.id)].body = payload.body;
  }),
  removeNote: action((state, payload) => {
    state.notes.splice(state.notes.findIndex(el => el.id === payload.id), 1);
  }),
})
