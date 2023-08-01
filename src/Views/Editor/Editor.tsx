import {EditingArea} from '../../Widgets/EditingArea';
import {SideBar} from '../../Components/SideBar';
import React, {Fragment, ReactElement} from "react";
import {ControlMenu} from "../../Components/ControlMenu";
import {ContentArea} from "../../Components/ContentArea";

export function Editor():ReactElement {
  return <Fragment>
            <SideBar>
              <Fragment>
                <ControlMenu />
                <ContentArea />
              </Fragment>
            </SideBar>
            <EditingArea />
          </Fragment>
}