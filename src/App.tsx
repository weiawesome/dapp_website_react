import React from 'react';
import './App.css';
// @ts-ignore
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Switch} from 'react-router-dom';
import Home from "./app/page";
import Connect_wallet from "./pages/connect_wallet";
import Get_information from "./pages/get_information";
import Build_transaction from "./pages/build_transaction";
import Interact_contract from "./pages/interact_contract";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/connect_wallet',
        element:<Connect_wallet></Connect_wallet>
    },
    {
        path:"/get_information",
        element:<Get_information></Get_information>
    },
    {
        path:"build_transaction",
        element:<Build_transaction></Build_transaction>
    },
    {
        path:"interact_contract",
        element:<Interact_contract></Interact_contract>
    }
])
function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}
export default App;
