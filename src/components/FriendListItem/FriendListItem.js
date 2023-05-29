import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import {randomColor} from '../../utils/makeColor';


export function FriendListItem({avatar, name, isOnline}) {
  // const colorClassName = [css.status, colorOnline];
  const colorClassName = `${css.status} ${isOnline ? css.green : css.red}`;
 
  return (
    <li className={css.item}>
      {/* <span className={classNames.join(" ")}></span> */}
      <span className={colorClassName}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} style={{backgroundColor: randomColor()}} />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
