

import Dashboard from "../components/pages/Dashboard";
import InsertIncome from '../components/pages/InsertIncome'
import LayoutComponent from "../components/template/Layout";
import ListDetail from "../components/pages/ListDetail";
import Page404 from "../components/template/Page404";

const routes = [

    {
        path: "/",
        component: LayoutComponent,
        routes: [{
            path: "/scb/dashboard",
            component: Dashboard
        }, {
            path: "/scb/page404",
            component: Page404
        }, {
            path: "/scb/InsertIncome",
            component: InsertIncome
        },
        {
            path: "/scb/ListDetail",
            component: ListDetail
        }
        ]
    },
];

export default routes;