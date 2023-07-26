import { firstNote } from '../store'
import { useStoreState } from '../storeModel'
import { NoteBodyEditor } from './NoteBodyEditor'
import { TitleEditor } from './TitleEditor'
import style from './editingarea.module.css'

export function EditingArea() {
    const notes = useStoreState(state => state.notes)

    const handleClick = () => {
        firstNote();
        window.location.reload()
    };

    return (
      notes.length !== 0
      ? <div className={style.edtitingAreaContainer}>
                <TitleEditor />
                <NoteBodyEditor />
        </div>
      : <div className={style.nothingToEdit}>
              <div>
                  Нечего редактировать
              </div>
              <div
                  className={style.giveMeInstruction}
                  onClick={handleClick}>
                  Верните инструкцию
              </div>
        </div>
    );
}
