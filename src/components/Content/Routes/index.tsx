import React from "react";
import { Route, Switch } from "react-router-dom";
import Addresses from "../../Addresses";
import Cabinets from "../../Cabinets";
import Sections from "../Sections";

const Routes: React.FC = () => {
    return <Switch>
        <Route path="/addresses/cabinets" component={() => <Cabinets />} />
        <Route path="/addresses" component={() => <Addresses />} />


        <Route path="/" component={() => <Sections />} />
    </Switch>
}

export default Routes