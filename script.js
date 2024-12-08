document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("nav ul li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");

            contents.forEach(content => {
                content.classList.remove("active");
            });

            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            document.getElementById(target).classList.add("active");
            tab.classList.add("active");
        });
    });
});