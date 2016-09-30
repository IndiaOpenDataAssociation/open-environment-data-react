import React, {Component} from 'react'
import Navbar,{Header, Brand, Toggle, Collapse} from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
// import {Navbar, Nav, NavItem} from 'react-bootstrap'


export default class Demo extends Component{
  render(){
    return(
      <div>
        <Navbar inverse fluid fixedTop>
          <Header>
            <Brand>
              <a href="/">OPEN ENVIRONMENT DATA PROJECT</a>
            </Brand>
            <Toggle />
          </Header>
          <Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/about">About</NavItem>
              <NavItem eventKey={2} href="/community">Community</NavItem>
              <NavItem eventKey={3} href="#">Open APIs</NavItem>
              <NavItem eventKey={4} href="#">Partners</NavItem>
              <NavItem eventKey={5} href="#">WIKI</NavItem>
              <NavItem eventKey={6} href="#" className="custom-navitem">Get our OWL</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
