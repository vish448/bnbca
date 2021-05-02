import React, { Component } from 'react'
import $ from 'jquery'

import Nav from './nav'

class MobileMenu extends Component {
  componentDidMount() {
    $('#menu-icon').on("click",function(){
      $(this).toggleClass('open');
      if($('#menu-icon').hasClass('open')){
          $('#mobileNav').css('width',window.innerWidth) 
      }
      else {
          $('#mobileNav').css('width',0) 
      }   
     })

     $('nav > a, nav > button').on("click",function(){
        $("#menu-icon").toggleClass('open');
        if($('#menu-icon').hasClass('open')){
            $('#mobileNav').css('width',window.innerWidth) 
        }
        else {
            $('#mobileNav').css('width',0) 
        }   
       })
  }

  render(){
    return (
      <header className="mobileHeader">
          <div className="mobileNavigation pl-2">
          <div id="menu-icon">
              <span></span>
              <span></span>
              <span></span>
          </div>
          
          <div id="mobileNav" className="mobileNav">
              <Nav />
          </div>
        </div>
    </header>
    )
  }
}

export default MobileMenu