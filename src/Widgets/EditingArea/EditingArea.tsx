import { NoteBodyEditor } from '../../Features/NoteBodyEditor'
import { TitleEditor } from '../../Features/TitleEditor'
import style from './editingarea.module.css'
import {useState} from "react";
import ButtonBase from '@mui/material/ButtonBase';
import {ArrowForwardIos} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reduxStore";
import {addNote, initialNote} from "../../Views/Editor/store/notesSlice";

export function EditingArea() {
    const notes = useSelector((state: RootState) => state.notes.notes);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(true);

    const handleGiveMeInstructionClick = () => {
        dispatch(addNote(initialNote));
    };

    const onCloseButtonHandler = () => setIsShow(!isShow);

    const showingEl = notes.length !== 0
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
                onClick={handleGiveMeInstructionClick}>
                Верните инструкцию
            </div>
        </div>

    return (<div className={style.mainAreaContainer + ' ' + (isShow ? style.mainAreaContainerShowed : '')}>
                <ButtonBase
                onClick={onCloseButtonHandler}
                children={<ArrowForwardIos />}
                className={style.hideIcon}/>
                {
                    isShow
                    ? showingEl
                    : null
                }
            </div>)
}
