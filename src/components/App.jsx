import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";
import user from "../Data/user.json";
import data from "../Data/data.json";
import friends from "../Data/friends.json";

// console.log(data);

export const App = () => {
  return (
    <div> React homework template
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title={"Upload stats3"} stats={data}/>

      <FriendList friends={friends}></FriendList>
      
    </div>
  );
};




// {
//   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//   "name": "Poly",
//   "isOnline": false,
//   "id": 1284
// }








