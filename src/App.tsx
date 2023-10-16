import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./app/page";
import Connect_wallet from "./pages/connect_wallet";
import Get_information from "./pages/get_information";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    // {
    //     path:'/connect_wallet',
    //     element:<Connect_wallet></Connect_wallet>
    // },
    {
        path:"/get_information",
        element:<Get_information></Get_information>
    },
    // {
    //     path:"/build_transaction",
    //     element:<Build_transaction></Build_transaction>
    // },
    // {
    //     path:"/interact_contract",
    //     element:<Interact_contract></Interact_contract>
    // }
])
function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}
export default App;
