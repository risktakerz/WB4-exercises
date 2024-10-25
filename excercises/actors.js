let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

function searchArray(selectedArray) {
  for (const member of academyMembers) {
    if (member.memID == 187) {
      // this to show the name of the person
      console.log(member.name + "Is Member ID " + member.memID);
    }
  }
}

searchArray(academyMembers);

function filmCheck(array) {
  for (let i = 0; i < academyMembers.length; i++) {
    console.log(academyMembers.length);
  }
}

filmCheck(academyMembers);
function checkArray4Name(array) {}
