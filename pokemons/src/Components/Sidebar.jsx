import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

function SideBar() {
  const location = useLocation(); 

  const getLinkClass = (path) => {
    return location.pathname === path ? styles.activeLink : '';
  };

  return (
    <div className={styles.SideBar}>
      <div> 
        <div className={styles.logo}>
          <img src={logo} alt="Pokemon" width={60} height={60}/> 
          <span>ZETA</span>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/" className={getLinkClass("/")}>
                  <img src={iconHome} alt="Register" width={20} height={20} />
                  Cadastrar
              </Link>
            </li>
            <li>
              <Link to="/curso" className={getLinkClass("/curso")}>
                  <img src={iconCurso} alt="List" width={20} height={20} />
                  Listar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className={styles.exploreButton}>
        <div>Explorar novas funcionalidades</div>
        <div>acesse novos planos</div>
        <button>Planos</button> 
      </div>
    </div>
  );
}