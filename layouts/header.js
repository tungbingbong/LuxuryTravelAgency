let header = document.querySelector(".header");
header.innerHTML = `
        <div class="header__topbar">
            <div class="grid wide">
                <div class="header__topbar-container">
                    <div class="row">
                        <div class="l-6 m-8 c-8">
                            <div class="header__topbar-container--contacts">
                                <span>+84 359 680 725</span>
                                <a href="#">
                                    <i class="fab fa-pinterest"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-behance"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div class="l-6 m-4 c-4">
                            <ul class="header__topbar-container--register">
                                <a href="#">
                                    <li>Login</li>
                                </a>
                                <a href="#">
                                    <li>|</li>
                                </a>
                                <a href="#">
                                    <li>Register</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="header__nav">
            <div class="header__nav-container">
                <div class="grid wide">
                    <div class="row">
                        <div class="l-3 m-6 c-8">
                            <a href="#">
                                <div class="header__nav-container--logo">
                                    <img src="../assets/images/logo.webp" alt="Logo Travelix" /> Travelix
                                </div>
                            </a>
                        </div>
                        <div class="l-6 hide-on-tablet_mobile">
                            <div class="header__nav-container--list">
                                <li><a href="../pages/home.html" class="active">Home</a></li>
                                <li><a href="../pages/about.html">About</a></li>
                                <li><a href="../pages/offers.html">Offers</a></li>
                                <li><a href="../pages/news.html">News</a></li>
                                <li><a href="../pages/contact.html">Contact</a></li>
                            </div>
                        </div>
                        <div class="l-3 m-6 c-4">
                            <i class="fas fa-bars list-tablet-mobile" id="menu_open"></i>
                            <div class="header__nav-container--search">
                                <i class="fas fa-search" id="search"></i>
                                <br/>
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="header__menu">
            <div class="header__menu-overlay"></div>
            <div class="header__menu-body--content">
                <ul>
                    <li><a href="../pages/home.html" class="active">Home</a></li>
                    <li><a href="../pages/about.html">About</a></li>
                    <li><a href="../pages/offers.html">Offers</a></li>
                    <li><a href=".../pages/news.html">News</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
                <i class="fas fa-times" id="menu_close"></i>
            </div>
        </div>
        <div class="scroll-top">
            <i class="fas fa-arrow-up"></i>
        </div>
    `;
