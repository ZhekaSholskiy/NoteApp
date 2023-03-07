import { useEffect } from 'react';
import { useStoreState } from '../../storeModel';
import { ShortNote } from './ShortNote';
import './contentarea.css';
import { saveToLocalStorage } from '../../store';
import { Scrollbars } from 'react-custom-scrollbars';

export function ContentArea() {
  const notes = useStoreState((state) => state.notes);

  // при любых изменениях записок в стейт-менедеже, сохраняем их в localStorage
  useEffect(() => {
    saveToLocalStorage(notes);
  }, [notes])

  return <div className='content-area-container'>
    <Scrollbars renderThumbVertical={props => <div {...props} style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '3px'}} className="thumb-vertical"/>}>
      {notes.length !== 0 ? notes.map(el => {
      return <ShortNote note={el} key={el.id}/>
      }) : 'Пока заметок нет'}
    </Scrollbars>
  </div>
}
