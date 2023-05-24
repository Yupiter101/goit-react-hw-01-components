import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";
import user from "../Data/user.json";
import data from "../Data/data.json";

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
      
    </div>
  );
};




// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]








