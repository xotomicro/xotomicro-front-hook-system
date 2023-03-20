import React from "react"
import {navigateToUrl} from "single-spa"
import {globalEventDistributor} from "../App"

export class NavBar extends React.Component<Readonly<any>, {token: string | null}> {
    constructor(props) {
        super(props)

        this.state = {token: sessionStorage.getItem("token")}
        if (globalEventDistributor) globalEventDistributor.on("login", () => this.setState({token: sessionStorage.getItem("token")}))
    }

    render() {
        if (!this.state.token) {
            return (
                <nav>
                    <h3 className="logo">Awesome micro front ends</h3>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" id="icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <ul>
                        <li style={{display: "inline"}}>
                            <a href="/" onClick={navigateToUrl}>
                                Home
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-auth-service" onClick={navigateToUrl}>
                                Auth Service
                            </a>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <h3 className="logo">Awesome micro front ends</h3>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" id="icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <ul>
                        <li style={{display: "inline"}}>
                            <a href="/" onClick={navigateToUrl}>
                                Home
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-auth-service" onClick={navigateToUrl}>
                                auth-service
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-event-service" onClick={navigateToUrl}>
                                event-service
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-order-service" onClick={navigateToUrl}>
                                order-service
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-product-service" onClick={navigateToUrl}>
                                product-service
                            </a>
                        </li>
                        &nbsp;|&nbsp;
                        <li style={{display: "inline"}}>
                            <a href="/xotomicro-front-user-service" onClick={navigateToUrl}>
                                user-service
                            </a>
                        </li>
                    </ul>
                </nav>
            )
        }
    }
}
