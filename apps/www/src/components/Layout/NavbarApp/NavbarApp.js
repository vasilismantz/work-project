import { useState } from "react";
import { ClearAll, LocalPizza, Add } from "@material-ui/icons";
import { AddTask } from "@/components";

const NavbarApp = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav className="main-nav">
        <div className="logo">
          <ClearAll />
        </div>
        <div className="settings">
          <ul>
            <li
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              <Add />
            </li>
            <li>
              <LocalPizza />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

export default NavbarApp;
