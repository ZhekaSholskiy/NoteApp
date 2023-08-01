import './App.css'
import {reduxStore} from "../../reduxStore";
import {EditingArea} from '../../Widgets/EditingArea/EditingArea';
import {SideBar} from '../../Components/SideBar';
import {Fragment, ReactElement} from "react";
import {Provider} from "react-redux";
import {ControlMenu} from "../../Components/ControlMenu";
import {ContentArea} from "../../Components/ContentArea";

export function App():ReactElement {
  return <Provider store={reduxStore}>
            <div className='app-container'>
                <SideBar>
                  <Fragment>
                      <ControlMenu />
                      <ContentArea />
                  </Fragment>
                </SideBar>
                <EditingArea />
            </div>
        </Provider>
}