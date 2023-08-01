import { useEffect } from 'react';
import { ShortNote } from './components/ShortNote';
import './contentarea.css';
import { Scrollbars } from 'react-custom-scrollbars';
import {RootState} from "../../reduxStore";
import {useSelector} from "react-redux";
import {saveToLocalStorage} from "../../Views/App/store/notesSlice";

export function ContentArea() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  // при любых изменениях записок в стейт-менедеже, сохраняем их в localStorage
  useEffect(() => {
    saveToLocalStorage(notes);
  }, [notes])

  return <div className='content-area-container'>
    <Scrollbars
        renderThumbVertical={props => {
          return <div
              {...props}
              style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '3px'}}
              className="thumb-vertical"/>
        }}>
      {notes.length !== 0
          ? notes.map(el => {
        return <ShortNote note={el} key={el.id}/>
      })
          : 'Пока заметок нет'}
    </Scrollbars>
  </div>
}
