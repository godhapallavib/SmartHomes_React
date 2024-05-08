import React from 'react'
import './LeftNavigationBar.css';
import './LeftNavigationStyles.css';

const LeftNavigationBar = () => {
    return (
        <div id="sidebar">
        <ul>
            <li>
                <h2>Doorbells</h2>
                <ul>
                    <li id="first"><a href="ConsoleList?maker=blink&console=Blink Doorbell">Blink</a>
                    </li>
                    <li><a href="ConsoleList?maker=eufy&console=Eufy Doorbell">Eufy</a></li>
                    <li><a href="ConsoleList?maker=ring&console=Ring Doorbell">Ring</a></li>
                </ul>
            </li>
            <li>
                <h2>Doorlocks</h2>
                <ul>
                    <li id="first"><a href="GamesList?maker=elemake">Elemake</a></li>
                    <li><a href="GamesList?maker=kwikset">Kwikset</a></li>
                    <li><a href="GamesList?maker=wyze">Wyze</a></li>
                </ul>
            </li>
            <li>
                <h2>Speakers</h2>
                <ul>
                    <li id="first"><a href="TabletList?maker=alexa">Alexa</a></li>
                    <li><a href="TabletList?maker=echoDot">EchoDot</a></li>
                    <li><a href="TabletList?maker=google">Google</a></li>
                </ul>
            </li>
            <li>
                <h2>Lightning</h2>
                <ul>
                    <li id="first"><a href="LightningList?maker=lifx&lightning=Lifx Lightning">Lifx Lightning</a>
                    </li>
                    <li><a href="LightningList?maker=tapo&lightning=Tapo Lightning">Tapo Lightning</a></li>
                    <li><a href="LightningList?maker=wipro&lightning=Wipro Lightning">Wipro Lightning</a></li>
                </ul>
            </li>
            <li>
                <h2>Thermostat</h2>
                <ul>
                    <li id="first"><a href="ThermostatList?maker=amazon">Amazon</a></li>
                    <li><a href="ThermostatList?maker=ecobee">Ecobee</a></li>
                    <li><a href="ThermostatList?maker=google">Google</a></li>
                </ul>
            </li>
            <li>
                <h2>Accessories</h2>
                <ul>
                    <li id="first"><a href="AccessoryList?maker=blink&console=xbox360">Blink Accessories</a></li>
                    <li><a href="AccessoryList?maker=eufy&console=PS4">Eufy Accessories</a></li>
                    <li><a href="AccessoryList?maker=ring&console=WII">Ring Accessories</a></li>
                </ul>
            </li>
        </ul>
    </div>
    )
  }
  
  export default LeftNavigationBar