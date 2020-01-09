import React, { Component } from "react"
import { Router } from "@reach/router"
import Main from './Main';

// To add a route to the router, you must have a component
// that is created and can be rendered
// Then add path=<your-path-here> 
// (Example <AppManageOverview path="app-management-overview"/>
//      this will make the url "localhost:8080/app-management-overview")
// To add a nested route to the router, you must put the component and 
// path within the origin component and create like a regular route
// (Example <AppManageOverview path="app-management-overview"
//              <ChosenApp path=":appId")/>
//          </AppManageOverview>
//      this will make the url "localhost:8080/app-management-overview/<appId>")
// Note - the ":var" for the path allows for the parameter to be part of the url
//      if the above nested route were to have the appId to equal 31 requested,
//      the outcome would be "localhost:8080/app-management-overview/31"

class Route extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state={};
    // }

    render() {
        return (
            <Router>
                <Main path="/"/>  
                {/* 
                TODO: have theses components created and update the paths
                <AppManage path="/ApplicationManagement"/>
                <BillingUsage path="/BillingAndUsage"/>         
                */}
            </Router>
        );
    }
}

export default Route;
