import { Action } from 'easy-peasy';
import { createTypedHooks } from 'easy-peasy';
import { EditorState, SerializedEditorState } from 'lexical';

export interface INote {
  title: string,
  body?: string,
  id: string,
}

export interface INotesModel {
  notes: INote[];
  activeNote: INote;
  addNote: Action<INotesModel, INote>;
  setActiveNote: Action<INotesModel, INote>;
  changeNoteTitle: Action<INotesModel, INote>;
  changeNoteBody: Action<INotesModel, INote>;
  removeNote: Action<INotesModel, INote>;
}

const typedHooks = createTypedHooks<INotesModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
