import "./globals.css"
import "../style/index.css"
import {Link} from "react-router-dom";

import React, {useState} from "react";
import data from "../assets/documents.json"
export default function Home() {
    const [category,setCategory]=useState("");
    const [name,setName]=useState("");
    const [day,setDay]=useState("");
    const handleTypeChange=(event:any)=>{
        setCategory(event.target.value.toString());
    }
    const handleNameChange=(event:any)=>{
        setName(event.target.value.toString());
    }
    const handleDayChange=(event:any)=>{
        setDay(event.target.value.toString());
    }
    return (
        <main className={"RealMain"}>
            <div className={"AppBar"}>
                <div className={"AppBar-div"}>
                    <Link className={"RouterBtn"} to={"/"}>主頁</Link>
                    <Link className={"RouterBtn"} to={"/connect_wallet"}>連結錢包</Link>
                    <Link className={"RouterBtn"} to={"/get_information"}>區塊資訊</Link>
                    <Link className={"RouterBtn"} to={"/build_transaction"}>建立交易</Link>
                    <Link className={"RouterBtn"} to={"/interact_contract"}>合約互動</Link>
                </div>
            </div>
            <h1 className={"falling-text"}>
                <span>
                    D
                </span>
                <span>
                    App
                </span>
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;(去中心化應用程序)
                </span>
            </h1>
            <div className={"Blocks"}>
                <div className={"Block"}>
                    <h2 className={"BlockTitle"}>區塊鏈</h2>
                    <div className={"BlockInfo"}>
                        區塊鏈：分散數據庫，保證安全和不可變性，用於加密貨幣、合同、供應鏈等。<br/><br/><p>查看更多</p>
                    </div>
                </div>
                <div className={"Chain"}></div>
                <div className={"Block"}>
                    <h2 className={"BlockTitle"}>智能合約</h2>
                    <div className={"BlockInfo"}>
                        智能合約是自動執行的數位合約，基於區塊鏈，無需中介，實現安全、透明的交易和條件履行。<br/><p>查看更多</p>
                    </div>
                </div>
                <div className={"Chain"}></div>
                <div className={"Block"}>
                    <h2 className={"BlockTitle"}>去中心化應用程序</h2>
                    <div className={"BlockInfo"}>
                        去中心化應用程序（DApp）是基於區塊鏈的應用，無需中央控制，實現分散運行和數據安全。<br/><p>查看更多</p>
                    </div>
                </div>
            </div>
            <div className={"Filter"}>
                <div>
                    <h2>主題</h2>
                    <select value={category} onChange={handleTypeChange}>
                        <option value={""}>All</option>
                        {data.Type.map((val,index)=>{
                            return (
                                <option key={index} value={val}>{val}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h2>名稱</h2>
                    <select value={name} onChange={handleNameChange}>
                        <option value={""}>All</option>
                        {data.Title.map((val,index)=>{
                            return (
                                <option key={index} value={val}>{val}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h2>天數</h2>
                    <select value={day} onChange={handleDayChange}>
                        <option value={""}>All</option>
                        {data.Days.map((val,index)=>{
                            return (
                                <option key={index} value={val}>{val}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            {data.Value.map((val,index)=>{
                if ((val.Type===category || category==="") && (val.Title===name || name==="") && (val.Day.toString()===day || day==="")) {
                    return (
                        <div className={"Card"} key={index}>
                            <div className={"CardContent"}>
                                <div className={"Card-Day"}>
                                    Day-{val.Day}
                                </div>
                                <div className={"Card-Type"}>
                                    {val.Type}&nbsp;:&nbsp;&nbsp;{val.Title}
                                </div>
                                <div className={"Card-Author"}>
                                    Author:&nbsp;&nbsp;{val.Author}
                                </div>
                                <div className={"Card-Content"}>
                                    {val.Content}
                                </div>
                            </div>
                            <div className={"More-Info"}>
                                <Link to={val.URL}>Learn More</Link>
                            </div>
                        </div>
                    );
                }
            })}
            <footer>
                    <div>
                        <h2 className={"Contact"}>Contact me</h2>
                        <h3>Name&nbsp;:&nbsp;童俊維</h3>
                        <h3>GitHub&nbsp;: <br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href={"https://github.com/weiawesome"}/>https://github.com/weiawesome</h3>
                        <h3>Email&nbsp;:<br/>&nbsp;&nbsp;&nbsp;&nbsp;open891013@gmail.com</h3>
                    </div>
                </footer>
        </main>
    )
}

