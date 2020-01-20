$(document).ready(function () {
    // Initialize animate-on-scroll
    AOS.init();

    var techCollapseButton = document.getElementById("techCollapse");
    var rotated = false;

    techCollapseButton.onclick = function () {
        if (!rotated)
            techCollapseButton.style.transform = "rotate(180deg)";
        else
            techCollapseButton.style.transform = "";
        rotated = !rotated;

        refreshAOS();
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Refresh AOS's DOM offsets now that new elements are displayed
    const refreshAOS = async () => {
        // Wait 200ms to give Bootstrap's collapse functions time to fully execute
        // so height offsets are accurate for AOS' refresh.
        await delay(200);
        AOS.refresh();
    }
});