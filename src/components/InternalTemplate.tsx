import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom'
import {Nav} from "react-bootstrap";
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

import logoImg from '../assets/images/logo.svg';

import styles from '../style/internal.module.scss';

type InternalTemplateProps = {
  children?: ReactNode
}

type MenuItemProps = {
  toggle: boolean,
  text: string,
  icon: IconDefinition
  link: string
}

function MenuItem(props: MenuItemProps){
  const history = useHistory();

  return (
  <Nav.Item
    className={styles.menuItem}
    onClick={()=> history.push(props.link)}
  >
    <FontAwesomeIcon icon={props.icon} className={styles.menuItemIcon}/>
    <span
      className={props.toggle ? styles.menuItemTextExpand : styles.menuItemTextCollapsed}
    > 
      {props.text}  
    </span>
  </Nav.Item>);
}

export function InternalTemplate(props: InternalTemplateProps) {
  
  const [toggle, setToggle] = useState(true);

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
  <>
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="Vibbra logo" />
      <p>Vibbra App Messager</p>
      <span>{currentDate}</span>
    </header>
    <div className={styles.container}>
      <div className={toggle ? styles.sidebarExpand : styles.sidebarCollapsed}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item 
            className={styles.toggleIcon}
            onClick={()=> setToggle(!toggle)}
          >
            <FontAwesomeIcon icon={faBars} className={styles.navIcon}/>
          </Nav.Item>

        </Nav>
      </div>
      <div className={toggle ? styles.contentExpand : styles.contentCollapsed}>
        {props.children}
      </div>
    </div>
  </>);
}
