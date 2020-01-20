$(document).ready(function () {
    // Initialize animate-on-scroll
    AOS.init();

    var techCollapseButton = document.getElementById("techCollapse");
    var showMore = document.getElementById("showMore");
    var rotated = false;

    techCollapseButton.onclick = function () {
        if (!rotated) {
            techCollapseButton.firstElementChild.classList.remove("fa-chevron-down");
            techCollapseButton.firstElementChild.classList.add("fa-chevron-up");
            showMore.innerText = "Show Less";
        }
        else {
            techCollapseButton.firstElementChild.classList.remove("fa-chevron-up");
            techCollapseButton.firstElementChild.classList.add("fa-chevron-down");
            showMore.innerText = "Show More";
        }
        rotated = !rotated;

        refreshAOS();
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Refresh AOS's DOM offsets now that new elements are displayed
    const refreshAOS = async () => {
        // Wait 250ms to give Bootstrap's collapse functions time to fully execute
        // so height offsets are accurate for AOS' refresh.
        await delay(250);
        AOS.refresh();
    }
});