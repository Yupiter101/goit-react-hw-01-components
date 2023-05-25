
import css from './FriendList.module.css';
import {FriendListItem} from '../FriendListItem/FriendListItem';

export function FriendList({friends}) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        )
      })}
      
    </ul>
    
  )
}