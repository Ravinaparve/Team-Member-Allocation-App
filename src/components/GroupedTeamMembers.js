import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teamList = [];
    for (let item of employees) {
      //find unique team names
      if (!teamList.includes(item.teamName)) {
        teamList.push(item.teamName);
      }
    }
    console.log(teamList);

    const teams = teamList.map((item) => ({
      team: item,
      members: employees.filter((emp) => emp.teamName === item),
      collapsed: selectedTeam === item ? false : true,
    }));
    // console.log(teams);

    return teams;
  }

  function handleTeamClick(e) {
    const transformedGroup = groupedEmployees.map((item) => {
      if (item.team === e.currentTarget.id) {
        return { ...item, collapsed: !item.collapsed };
      } else {
        return item;
      }
    });
    setGroupedData(transformedGroup);
    setTeam(e.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
