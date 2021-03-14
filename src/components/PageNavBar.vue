<template>
    <nav class="header d-flex flex-row align-item-center navbar navbar-expand-lg navbar-light bg-light">
        <div class="logo_container">
            <div class="logo">
                <img src="../assets/emp.png" alt="">
                <span>Test</span>
            </div>
        </div>       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <!-- <a to="/"> -->
                    <router-link to="/">
                        Home
                    </router-link>
                    <!-- </a> -->
                </li>
                <li class="nav-item">
                    <router-link to="/problema-1">
                        Problema-1
                    </router-link>
                    <!-- <a href="#">Problema-1</a> -->
                </li>
                <li class="nav-item">
                    <router-link to="/problema-2">
                        Problema-2
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/problema-3">
                        Problema-3
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="header_side d-flex flex-row justify-content-center align-items-center">
            <img src="../assets/phone-call.svg" alt="">
            <span>+591 72686819</span>
        </div>
    </nav>
</template>
<script>
export default {
    name : 'NavBar'
}
</script>
<style scoped>
.nav-item 
{
    display: inline-block;
    margin-right: 40px;
    margin-left: 20px;
}

ul
{
	list-style: none;
	margin-bottom: 0px;
    padding-left: 30px;  
}

a
{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #3a3a3a;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}

.navbar-collapse
{
    background: #f8f9fa;
}

img
{
    width: 180px;
}

.header
{
	position: fixed;
	top: 45px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%);
	width: 1318px;
	height: 104px;
	background: #FFFFFF;
	z-index: 10;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
    box-shadow: 0px 20px 49px rgb(0 0 0 / 67%);
}
.header.scrolled
{	
	top: 15px;
}
.header.scrolled .header_content::before
{
	box-shadow: 0px 20px 49px rgba(0,0,0,0.17);
}
.header_content
{
	width: calc(100% - 140px);
	height: 100%;
}
.header_content::before
{
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	content: '';
	box-shadow: 0px 20px 49px rgba(0,0,0,0.67);
	z-index: -1;
}

.logo_container
{
	display: inline-block;
}
.logo span
{
	font-family: 'Open Sans', sans-serif;
	font-size: 30px;
	font-weight: 900;
	color: #3a3a3a;
	vertical-align: middle;
	text-transform: uppercase;
	margin-left: 3px;
}

.main_nav_container
{
	display: inline-block;
	margin-left: 40px;
	padding-right: 93px;
}
.main_nav
{
	margin-top: 7px;
}
.main_nav_item
{
	display: inline-block;
	margin-right: 40px;
}
.main_nav_item:last-child
{
	margin-right: 0px;
}
.main_nav_item a
{
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 700;
	color: #3a3a3a;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.main_nav_item a:hover
{
	color: #ffb606;
}

.header_side
{
	width: 210px;
	height: 100%;
	background: #ffb606;
}
.header_side img
{
	width: 29px;
	height: 29px;
}
.header_side span
{
	display: block;
	position: relative;
	font-size: 18px;
	font-weight: 500;
	color: #FFFFFF;
	padding-left: 12px;
}

@media only screen and (max-width: 1380px)
{
	.header
	{
		width: 1200px;
	}
	.header_content
	{
		width: calc(100% - 140px);
	}
	.main_nav_container
	{
		padding-right: 63px;
	}
	.header_side
	{
		width: 140px;
	}
	.header_side span
	{
		font-size: 14px;
	}
	.header_side img
	{
		width: 20px;
		height: 20px;
	}
}

@media only screen and (max-width: 1280px)
{
	.header
	{
		width: 90%;
	}
	.header_content
	{
		width: 100%;
	}
	.header_side
	{
		display: none !important;
	}
	.main_nav_container
	{
		padding-right: 53px;
	}
}

@media only screen and (max-width: 1024px)
{
	.main_nav_item
	{
		margin-right: 33px;
	}
}

@media only screen and (max-width: 575px)
{
	h1{font-size: 24px;}
	p{font-size:13px;}
	.header
	{
		height: 74px;
	}
	.logo img
	{
		width: 80px;
	}
	.logo span
	{
		font-size: 16px;
	}
	.hamburger_container
	{
		right: 5px;
	}
    .menu
	{
		top: 70px;
	}
	.menu_item
	{
		margin-bottom: 0px;
	}
	.menu_item a
	{
		font-size: 24px;
	}
	.menu_close_container
	{
		right: 30px;
		top: 34px;
	}
}

@media only screen and (max-width: 479px)
{
	.header
	{
		height: 60px;
		top: 15px;
	}
}
</style>