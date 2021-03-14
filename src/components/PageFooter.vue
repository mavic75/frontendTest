<template>
    <footer id="mu-footer">
        <div class="mu-footer-bottom">
            <div class="container">
                <div class="mu-footer-bottom-area">
                    <p>&copy; All Right Reserved. Designed by Davic25</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'PageFooter'
}
</script>
<style>

#mu-footer .mu-footer-bottom {
    background-color: #222;
    display: inline;
    float: left;
    padding: 25px 0;
    width: 100%;
    height: 12vh;
}

#mu-footer .mu-footer-bottom .mu-footer-bottom-area p {
    color: #fff;
    margin-bottom: 0;
    letter-spacing: 0.3px;
}

#mu-footer .mu-footer-bottom .mu-footer-bottom-area {
    display: inline;
    float: left;
    text-align: center;
    width: 100%;
}
</style>