import {
  KeyboardArrowDown,
  Inbox,
  CalendarToday,
  DateRange,
} from "@material-ui/icons";
import { Projects, AddProject } from "@/components";
import { useSelectedProjectValue } from "@/context";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li onClick={() => setSelectedProject({ name: "INBOX" })}>
          <span>
            <Inbox />
          </span>
          <span>Inbox</span>
        </li>
        <li onClick={() => setSelectedProject({ name: "TODAY" })}>
          <span>
            <CalendarToday />
          </span>
          <span>Today</span>
        </li>
        <li onClick={() => setSelectedProject({ name: "NEXT_7" })}>
          <span>
            <DateRange />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <KeyboardArrowDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">
        <Projects />
      </ul>
      <AddProject />
    </div>
  );
};

export default Sidebar;
