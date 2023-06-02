import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const TeamMemberCard = ({ employee, selectedTeam }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
    >
      <img
        src={employee.gender === "female" ? femaleProfile : maleProfile}
        className="card-img-top"
        alt={`${employee.gender === "female" ? "female" : "male"}-profile`}
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">Designation: {employee.designation}</p>
        <p className="card-text">Team Name: {employee.teamName}</p>
      </div>
    </div>
  );
};
export default TeamMemberCard;
