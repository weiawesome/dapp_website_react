import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Connect_wallet from "./pages/connect_wallet";

const router=createBrowserRouter([
    // {
    //     path:'/',
    //     element:<Home></Home>
    // },
    {
        path:'/',
        element:<Connect_wallet></Connect_wallet>
    },
    // {
    //     path:"/get_information",
    //     element:<Get_information></Get_information>
    // },
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
