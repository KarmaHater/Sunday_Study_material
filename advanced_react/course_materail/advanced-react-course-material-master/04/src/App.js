import "./index.css";
import React from "react";
import MenuIcon from "react-icons/lib/md/menu";
import { set, get, subscribe } from "./local-storage";
/*
Create a `withStorage` higher order component that manages saving and retrieving
the `sidebarIsOpen` state to local storage
*/

const withStorage = (storageKey, default_) => Comp =>
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

        set = value => {
            set(storageKey, value);
        };

        render() {
            return (
                // gets the props from the child compoent to the HOC
                <Comp {...this.props} {...this.state} setStorage={this.set} />
            );
        }
    };

class App extends React.Component {
    render() {
        const { sidebarIsOpen, setStorage, storageKey } = this.props;
        return (
            <div className="app">
                <header>
                    <button
                        className="sidebar-toggle"
                        title="Toggle menu"
                        onClick={() => {
                            setStorage(!sidebarIsOpen);
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

// export default withStorage(withStorage("match", true)(App));
// watch out for naming collitions because match is also included in react router

export default withStorage("sidebarIsOpen", true)(App);
