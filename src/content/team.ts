export type TeamMember = {
  name: string;
  role: string;
  image: string;
  line: string;
};

export const team: TeamMember[] = [
  {
    name: "Paul Whitaker",
    role: "Director",
    image: "/team/paul-whitaker.jpg",
    line: "Runs Ridgeway. Paul reads every review and every complaint himself.",
  },
  {
    name: "Gary Hughes",
    role: "Manager",
    image: "/team/gary-hughes.jpg",
    line: "Runs the diary, the van and the unit, and quotes every coating we do.",
  },
  {
    name: "Ellis Carter",
    role: "Lead Detailer",
    image: "/team/ellis-carter.jpg",
    line: "Does the corrections and coatings, and trains the team. Ten years on cars.",
  },
  {
    name: "Jade Morris",
    role: "Detailer",
    image: "/team/jade-morris.jpg",
    line: "Runs the mobile van most days. Interiors are her favourite, the dirtier the better.",
  },
  {
    name: "Sam Okoro",
    role: "Apprentice Detailer",
    image: "/team/sam-okoro.jpg",
    line: "In his first year. Valets, wheels and the maintenance club washes, working alongside Ellis and Jade.",
  },
];
