import css from './FriendListItem.module.css';


export function FriendListItem({avatar, name, isOnline}) {
  const classNames = [css.status, isOnline && css.online];
  return (
    <li className={css.item}>
      <span className={classNames.join(" ")}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  )
}


