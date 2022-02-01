import React from 'react';

const Header = ({ title }) => {
  return <header class='header'>
        
        <nav class = "mb-4 navbar navbar-expand-lg navbar-light purple-nav lighten-4">
            <div class= "container">
                <a class = "navbar-brand font-bold" href="#">Phonebook</a>
                <div class = "search-contact">
                    <form class="form-inline md-form mb-0">
                        <i class="fa fa-search" aria-hidden='true'/>
                        <input class = "form-control font-bold w-75 ml-3" type="text" placeholder='Search' aria-label='Search'/>
                    </form>
                </div>
            </div>
        </nav>
        
  </header>;
};

export default Header;
