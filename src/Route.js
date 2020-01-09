import React, { Component } from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Main from './Main';
import Typography from "@material-ui/core/Typography"

const Dash = () => {
    return(
        <div>
            <Typography style={{ align: "center" }}>
                <h1>Home</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="overview">Dashboard</Link>
                </nav>
            </Typography>
        </div>
    )
}


class Route extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state={};
    // }

    render() {
        return (
            <Router>
                <Main path="/"/>
                <Dash path="overview" />
              
            </Router>
        );
    }
}

export default Route;
