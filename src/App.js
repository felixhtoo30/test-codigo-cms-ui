import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import '@coreui/icons/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CContainer } from "@coreui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEVoucher from "./containers/CreateEVoucher";
import ShowEVoucherList from "./containers/ShowEVoucherList";
import EditEVoucher from "./containers/EditEVoucher";

const routes = [
  {
    path: "/evoucher/list",
    exact: true,
    main: () => <ShowEVoucherList />
  },
  {
    path: "/evoucher/create",
    main: () => <CreateEVoucher />
  },
  {
    path: "/evoucher/edit",
    main: () => <EditEVoucher />
  }
];

function App() {
  const [sideBarShow, setSideBarShow] = useState(true);

  return (
    <div className="d-flex">
      <Router>
        <CContainer fluid>
          <Header setSideBarShow={setSideBarShow} />
          <Switch>
          {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </CContainer>
        {sideBarShow ? <Sidebar /> : null}
      </Router>
    </div>
  );
}

export default App;
