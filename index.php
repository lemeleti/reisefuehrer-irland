<script>
    var pwd = prompt("Please enter Password", "");
    if(pwd == null || pwd != "bma2017") {
        window.history.back();
    } else {
        window.location="public_html/index.php";
    }
</script>