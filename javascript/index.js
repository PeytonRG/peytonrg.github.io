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

    var glide = new Glide('.glide', {
        bound: true,
        gap: 10,
        peek: { before: 30, after: 30 },
        perView: 1,
        rewind: false,
        startAt: 0,
        swipeThreshold: 50,
        type: 'carousel',
        // breakpoints: {
        //     1199: {
        //         perView: Math.min(navBarLinksCount, 6)
        //     },
        //     991: {
        //         perView: Math.min(navBarLinksCount, 5)
        //     },
        //     768: {
        //         gap: 10,
        //         peek: { before: 75, after: 75 },
        //         perView: Math.min(navBarLinksCount, 3),
        //         type: 'carousel'
        //     },
        //     700: {
        //         gap: 10,
        //         peek: { before: 100, after: 100 },
        //         perView: Math.min(navBarLinksCount, 2),
        //         type: 'carousel'
        //     },
        //     550: {
        //         gap: 10,
        //         peek: { before: 90, after: 90 },
        //         perView: 1,
        //         type: 'carousel'
        //     }
        // }
    });

    glide.mount();
});