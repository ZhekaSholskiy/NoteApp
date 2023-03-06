import { useEffect } from 'react';
import { useStoreState } from '../../storeModel';
import { ShortNote } from './ShortNote';
import './contentarea.css';
import { saveToLocalStorage } from '../../store';

export function ContentArea() {
  const notes = useStoreState((state) => state.notes);

  // при любых изменениях записок в стейт-менедеже, сохраняем их в localStorage
  useEffect(() => {
    saveToLocalStorage(notes);
  }, [notes])

  console.log(notes)

  return <div className='content-area-container'>
    {notes.length !== 0 ? notes.map(el => {
      return <ShortNote note={el} key={el.id}/>
    }) : 'Пока заметок нет'}
  </div>
}
