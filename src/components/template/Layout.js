import React from "react";
import Header from "./Header"
import { Layout } from 'antd';
import {
    Switch,
    Route,
} from "react-router-dom";

const { Content } = Layout;

function LayoutComponent({ routes, params }) {
    return (
        <Layout style={{ height: "100vh" }}>
            <Layout>
                <Header />
                <Content style={{ marginTop: 50 }}>
                    <Switch>
                        {
                            routes.map((route, i) => (
                                <Route key={i.toString()} path={route.path}
                                    component={route.component} />
                            ))
                        }
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );

}

export default LayoutComponent