import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../Data/user.json";
import data from "../Data/data.json";
import friends from "../Data/friends.json";
import transactions from '../Data/transactions.json';

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

      <TransactionHistory items={transactions}/>
      
    </div>
  );
};




// {
//   "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//   "type": "invoice",
//   "amount": "964.82",
//   "currency": "LRD"
// }







