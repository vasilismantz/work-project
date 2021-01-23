import { useState } from "react";
import { ClearAll, ExitToApp, Add } from "@material-ui/icons";
import { AddTask } from "@/components";
import { isLoggedInVar } from "@/lib/graphql/cache";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const NavbarApp = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    isLoggedInVar(false);
    enqueueSnackbar("You have been logged out.", { variant: "success" });
    router.push("/landingPage");
  };

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
            <li
              onClick={() => {
                logout();
              }}
            >
              <ExitToApp />
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
