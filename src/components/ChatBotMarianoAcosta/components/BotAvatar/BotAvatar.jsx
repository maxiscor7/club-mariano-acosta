import React from "react";
import logo from '../../../../assets/logo.png';
import './BotAvatar.css'

const BotAvatar = () => {
    return (
        <div className="logo-avatar">
            <img src={logo} alt="botImage" />
        </div>
    )
}
export default BotAvatar;