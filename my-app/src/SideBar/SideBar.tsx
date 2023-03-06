import { ContentArea } from './ContentArea/ContentArea';
import { ControlMenu } from './ControlMenu/ControlMenu';
import './sidebar.css';

export function SideBar() {


  return <div className='sidebar-container'>
    <ControlMenu />
    <ContentArea />
  </div>
}
