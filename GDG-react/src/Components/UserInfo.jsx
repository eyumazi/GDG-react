import userProfiles from "./UserProfiles";
import "../UserInfoList.css";
import { useParams } from "react-router-dom";
import { Page404 } from "./Page404";

export const UserInfo = () => {
  const { userId } = useParams();
  const userInfo = userProfiles.find((user) => user.userId === userId);

  if (!userInfo) {
    return <Page404 />;
  }

  return (
    <div className="user-info">
      <h1>User Information About {userInfo.name}</h1>
      <ul>
        <li>
          <strong>User Id:</strong> {userInfo.userId}
        </li>
        <li>
          <strong>Name:</strong> {userInfo.name}
        </li>
        <li>
          <strong>Age:</strong> {userInfo.age}
        </li>
        <li>
          <strong>Email:</strong> {userInfo.email}
        </li>
        <li>
          <strong>Username:</strong> {userInfo.username}
        </li>
        <li>
          <strong>Location:</strong> {userInfo.location}
        </li>
        <li>
          <strong>Skills:</strong> {userInfo.skills.join(", ")}
        </li>
        <li>
          <strong>Education:</strong>
          <ul>
            <li>
              <strong>Degree:</strong> {userInfo.education.degree}
            </li>
            <li>
              <strong>University:</strong> {userInfo.education.university}
            </li>
            <li>
              <strong>Graduation Year:</strong>{" "}
              {userInfo.education.graduationYear}
            </li>
          </ul>
        </li>
        <li>
          <strong>Experience:</strong>
          <ul>
            {userInfo.experience.map((exp, index) => (
              <li key={index}>
                <strong>Role:</strong> {exp.role}, <strong>Company:</strong>{" "}
                {exp.company}, <strong>Years:</strong> {exp.years}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Projects:</strong>
          <ul>
            {userInfo.projects.map((project, index) => (
              <li key={index}>
                <strong>Name:</strong> {project.name},{" "}
                <strong>Description:</strong> {project.description},{" "}
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Interests:</strong> {userInfo.interests.join(", ")}
        </li>
      </ul>
    </div>
  );
};
