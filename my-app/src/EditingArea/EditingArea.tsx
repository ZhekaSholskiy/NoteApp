import { NoteBodyEditor } from './NoteBodyEditor'
import { TitleEditor } from './TitleEditor'
import style from './editingarea.module.css'

export function EditingArea() {

  return <div className={style.edtitingAreaContainer}>
    <TitleEditor />
    <NoteBodyEditor />
  </div>
}
