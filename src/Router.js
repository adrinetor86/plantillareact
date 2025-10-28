import React, {Component} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HeaderComponent from "./components/headercomponent/HeaderComponent";
import HomeComponent from "./components/homecomponent/HomeComponent";
import CreateComponent from "./components/createcomponent/CreateComponent";
import EditComponent from "./components/editcomponent/EditComponent";
import NotFoundComponent from "./components/notfound/NotFoundComponent";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path={"/"} element={<HomeComponent/>}/>
                    <Route path={"/create"} element={<CreateComponent/>}/>
                    <Route path={"/edit"} element={<EditComponent/>}/>


                    <Route path={"/*"} element={<NotFoundComponent/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;