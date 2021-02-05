import {
  KeyboardArrowDown,
  Inbox,
  CalendarToday,
  DateRange,
} from "@material-ui/icons";
import { Projects, AddProject } from "@/components";
import { useSelectedProjectValue } from "@/context";
import { useState } from "react";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [showProjects, setShowProjects] = useState(true);
  const [active, setActive] = useState("inbox");

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          onClick={() => {
            setActive("inbox");
            setSelectedProject({ name: "INBOX" });
          }}
          className={active === "inbox" ? "active" : undefined}
        >
          <span>
            <Inbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          onClick={() => {
            setActive("today");
            setSelectedProject({ name: "TODAY" });
          }}
          className={active === "today" ? "active" : undefined}
        >
          <span>
            <CalendarToday />
          </span>
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setActive("next_7");
            setSelectedProject({ name: "NEXT_7" });
          }}
          className={active === "next_7" ? "active" : undefined}
        >
          <span>
            <DateRange />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <KeyboardArrowDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      <AddProject />
    </div>
  );
};

export default Sidebar;
