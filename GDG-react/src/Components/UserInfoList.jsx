import userProfiles from "./UserProfiles";
import "../UserInfoList.css";
import { Link } from "react-router-dom";

export const UserInfoList = () => {
  return (
    <>
      <div className="container">
        <h2>User Information List</h2>
        <h3>Click on the one to see details</h3>
        <ul className="list-container">
          {userProfiles.map((user, i) => (
            <Link key={i} to={`/UserInfo/${user.userId}`}>
              <div className="listItem">
                <li> User Id: {user.userId} </li>
                <li> User Name: {user.name} </li>
                <li> User Email: {user.email} </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
