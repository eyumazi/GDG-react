import userProfiles from "../Components/UserProfiles";
import "../UserInfoList.css";
import { useNavigate } from "react-router-dom";

export const UserInfoList = () => {
  const navigate = useNavigate();

  const handleNavigation = (userId) => {
    navigate(`/UserInfo/${userId}`);
  };

  return (
    <>
      <div className="container">
        <h2>User Information List</h2>
        <h3>Click on the one to see details</h3>
        <ul className="list-container">
          {userProfiles.map((user, i) => (
            <li key={i} className="listItem">
              <button onClick={() => handleNavigation(user.userId)}>
                <div> User Id: {user.userId} </div>
                <div> User Name: {user.name} </div>
                <div> User Email: {user.email} </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
