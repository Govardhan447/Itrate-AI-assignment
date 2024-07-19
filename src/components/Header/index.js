import {useState} from 'react'

import './index.css'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  const [linkActive, setLinkActive] = useState(false)
  const onclickLink = () => {
    setLinkActive(true)
  }
  const classname = linkActive ? 'active' : 'link'
  return (
    <navbar className='nav-container'>
      <div className='header-img-container'>
        <img
          src='https://res.cloudinary.com/ds1piowcn/image/upload/v1721394087/Screenshot_2024-07-19_173417_m3m76y.png'
          alt='header logo'
        />
      </div>
      <div className='header-elements-container'>
        <Link className={classname} to='/' onClick={onclickLink}>
          Home
        </Link>
        <Link className={classname} to='/puja'>
          Puja
        </Link>
        <Link className={classname}>Panchang</Link>
        <Link className={classname}>Template</Link>
        <Link className={classname}>Library</Link>
      </div>
      <div className='language-contaienr'>
        <select className='select-options'>
          <option value='English'>English</option>
          <option value='Hindi'>Hindi</option>
        </select>
        <CgProfile className='profile' />
      </div>
    </navbar>
  )
}

export default Header
