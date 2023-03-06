import './App.css'
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import { EditingArea } from './EditingArea/EditingArea';
import { SideBar } from './SideBar/SideBar';

function App() {
  return <div className='app-container'>
            <SideBar />
            <EditingArea />
        </div>
}
function AppWrapper() {
  return <StoreProvider store={store}>
            <App />
         </StoreProvider>
}

export default AppWrapper;
