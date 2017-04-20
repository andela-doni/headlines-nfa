import React from "react";
import { Link } from "react-router";
import Cookies from 'js-cookie';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
const isLoggedIn = Cookies.get('debprojdb');
//info you get from your the stored info on your browser cookie
import createHistory from 'history/createBrowserHistory';
export default class Layout extends React.Component {
 
  render() {
    const { location } = this.props;
    console.log(this.props);
    // this.props contains the location that is used to fetch pathname
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} isLoggedIn={isLoggedIn}  />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Headlines</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
