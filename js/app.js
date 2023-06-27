//creates list items for the nav-bar
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const ul = document.querySelector("#nav-list");
    const items = [
        { text: "Dogs", sectionId: "dogs" },
        { text: "Cats", sectionId: "cats" },
        { text: "Moths", sectionId: "moths" },
        { text: "Sources", sectionId: "sources" }
    ];

    //adds list items to the nav-bar
    for (const item of items) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${item.sectionId}`;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    }

    const handleSectionHover = (section) => {
        section.classList.add("active");
        const activeLink = document.querySelector(`#nav-list a[href="#${section.id}"]`);
        if (activeLink) {
        activeLink.classList.add("active");
    }
    };

    const handleSectionLeave = (section) => {
        section.classList.remove("active");
        const inactiveLink = document.querySelector(`#nav-list a[href="#${section.id}"]`);
        if (inactiveLink) {
        inactiveLink.classList.remove("active");
    }
    };

    // finds active section
    const makeActive = () => {
        const VALUE = 150;
        for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= VALUE && box.bottom >= VALUE) {
            handleSectionHover(section);
        } else {
            handleSectionLeave(section);
        }
    }
    };

    //event listeners for scrolling on and off sections
    for (const section of sections) {
        section.addEventListener("mouseover", () => {
        handleSectionHover(section);
        });

        section.addEventListener("mouseleave", () => {
        handleSectionLeave(section);
    });
    }

    //changes make active status for the section in view
    document.addEventListener("scroll", () => {
        makeActive();
    });

    const links = document.querySelectorAll("#nav-list a");

    //adds smooth scrolling
    for (const link of links) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
