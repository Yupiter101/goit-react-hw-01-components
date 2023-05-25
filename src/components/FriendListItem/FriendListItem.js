import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import {randomColor} from '../../utils/makeColor';


export function FriendListItem({avatar, name, isOnline}) {
  const classNames = [css.status, isOnline && css.online];
  return (
    <li className={css.item}>
      <span className={classNames.join(" ")}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} style={{backgroundColor: randomColor(180, 255)}} />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
