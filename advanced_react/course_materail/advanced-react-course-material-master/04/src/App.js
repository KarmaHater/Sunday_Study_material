import "./index.css";
import React from "react";
import MenuIcon from "react-icons/lib/md/menu";
import { set, get, subscribe } from "./local-storage";
/*
Create a `withStorage` higher order component that manages saving and retrieving
the `sidebarIsOpen` state to local storage
*/

const withStorage = (storageKey, default_) => (Comp) =>
    class extends React.Component {
        state = {
            [storageKey]: get(storageKey, default_)
        };

        componentDidMount() {
            this.unsubscribe = subscribe(() => {
                this.setState({
                    sidebarIsOpen: get("sidebarIsOpen")
                });
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            return <Comp {...this.state} />;
        }
    };

class App extends React.Component {
    render() {
        const { sidebarIsOpen } = this.props;
        return (
            <div className="app">
                <header>
                    <button
                        className="sidebar-toggle"
                        title="Toggle menu"
                        onClick={() => {
                            set("sidebarIsOpen", !sidebarIsOpen);
                        }}
                    >
                        <MenuIcon />
                    </button>
                </header>

                <div className="container">
                    <aside className={sidebarIsOpen ? "open" : "closed"} />
                    <main />
                </div>
            </div>
        );
    }
}

export default withStorage('sidebarIsOpen', true)(App);
