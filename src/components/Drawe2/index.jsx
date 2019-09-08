import React,{Component} from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn"

//App
import MatIcon from "../Icon";
import "./index.css"


export default class MatDrawer extends Component {

  render() {
      const {opened = false, drawerMenu = [], drawerType = 'mini' ,onClick=()=>{} }=this.props

    return (
      <div className={`ai-drawer w3-bar-block w3-card-4 ${opened ? "opened" : "closed"} ${drawerType == "list" ? "listView" : ""}`}>
        <div className="w3-card  w3-padding w3-center w3-margin-bottom">
          <a className="paper-font-headline w3-text-black"><MatIcon icon="add" size={60}/></a>
        </div>
        {drawerMenu.map((menu, i) => {
          return (
            <Btn 
              key={`drawerMenu-${i}-${menu.title}-${menu.fun}`}
              onClick={onClick}
              className={` w3-bar-item drawer-menu-icon w3-ripple ai-caps w3-margin-top ${drawerType == "list" ? "w3-padding" : "w3-center"}`}
              href={menu.url}
              title={menu.title}
            function={menu.fun}
            >
              <MatIcon icon={menu.icon} size={drawerType == "list" ? 32 : 58} />
              <div className={`${drawerType == "list" ? "w3-show-inline-block w3-margin-left" : "drawer-menu-icon-title paper-font-menu"}`}>
                {menu.title}
              </div>
            </Btn>
          );
        })}
      </div>
    );
  }
}
