/*(function () {

})();*/

document.addEventListener("DOMContentLoaded", function() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('lptag')) {
        const newUrl = "https://link.coupang.com/re/AFFSDP?" + searchParams.toString();
        console.log("리디렉션 중: ", newUrl);
        window.location.href = newUrl;
    }
});
