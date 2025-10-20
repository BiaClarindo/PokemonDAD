import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Sidebar.module.css";
import logo from '../../assets/images/logo-pokemon.png';
import iconRegister from '../../assets/images/icon-register.png';
import iconList from '../../assets/images/icon-list.png';


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
          <span>Pokemon</span>
        </div>

        <nav>
          <ul>
            <li>
              {/* CORREÇÃO: O caminho para getLinkClass deve corresponder ao 'to' */}
              <Link to="/" className={getLinkClass("/")}>
                  <img src={iconRegister} alt="Register" width={20} height={20} />
                  Cadastrar
              </Link>
            </li>
            <li>
              {/* CORREÇÃO: O 'to' deve apontar para a rota de listagem */}
              <Link to="/listagem" className={getLinkClass("/listagem")}>
                  <img src={iconList} alt="List" width={20} height={20} />
                  Listar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
