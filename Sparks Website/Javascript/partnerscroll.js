
const partnerSection = document.getElementById("partner");
console.log("Scrolling to the partner section...");

window.onscroll = () => {
    scrollToPartnerSection();
};

function scrollToPartnerSection() {
    
}

partnerSection.onclick = () => {
    window.scrollTo({
        bottom: 0,
        behavior: "smooth"
    });
};