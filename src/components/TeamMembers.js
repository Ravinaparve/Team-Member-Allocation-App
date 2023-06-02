import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard employee={employee} selectedTeam={selectedTeam} />
  ));
};
export default TeamMembers;
