import { createStore, action } from 'easy-peasy';
import { INote, INotesModel } from './storeModel';
import { generateId } from './utils/generateId';

const LOCAL_STORAGE_KEY = 'noteApplication-qmvp-123f-1fh4-2h21-xh6p';

export function firstNote() {
  const initialNote: INote = {
    title: 'Добро пожаловать в NoteApp!',
    body: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Это приложение \'NoteApp\'!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Здесь можно:","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"создавать заметки (кнопка листа с плюсиком в левом верхнем углу);","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"удалять заметки (значок корзины справа от названия заметки);","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"давать заметке название (поле для ввода вверху страницы);","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"редактировать заметки. Для этого нужно просто выбрать нужную заметку в меню слева;","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":4}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Возможности редактора:","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"назначать заголовки","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"вставлять цитирование","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"quote","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"enter(codeSnippets)","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"// вставлять фрагменты кода","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"code","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"создавать нумерованные и маркированные списки","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"выделять текст ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"жирным, ","type":"text","version":1},{"detail":0,"format":2,"mode":"normal","style":"","text":"курсивом,","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":" ","type":"text","version":1},{"detail":0,"format":8,"mode":"normal","style":"","text":"подчеркнутым,","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":" ","type":"text","version":1},{"detail":0,"format":4,"mode":"normal","style":"","text":"зачеркнутым, ","type":"text","version":1},{"detail":0,"format":15,"mode":"normal","style":"","text":"все вместе","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"вставлять ссылки","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noopener","target":null,"url":"https://google.com"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"выравнивать","type":"text","version":1}],"direction":"ltr","format":"left","indent":0,"type":"listitem","version":1,"value":4},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"текст","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"listitem","version":1,"value":5},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"по странице","type":"text","version":1}],"direction":"ltr","format":"right","indent":0,"type":"listitem","version":1,"value":6},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"и кр","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"color: #f5a623;","text":"аси","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"ть ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"color: #d0021b;","text":"е","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"color: #9013fe;","text":"го в ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"color: #4a90e2;","text":"какой-","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"нибудь","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"color: #417505;","text":" цвет","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":7}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"color: #7ed321;","text":"Good luck!","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"heading","version":1,"tag":"h1"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
    id: generateId(),
  }
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([initialNote]));
}

const getLocalData = () => JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) as string)

// если это первый запуск приложения, выводим стандартную заметку
if (!getLocalData()) {
  firstNote();
}

export function saveToLocalStorage(notes: INote[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
}

export const store = createStore<INotesModel>({
  notes: getLocalData(),
  activeNote: getLocalData()[0],
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
