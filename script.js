
// Profile Picture

let profileImg = document.querySelector(".profile-img");
let video = document.querySelector(".profile-video");

profileImg.addEventListener('mouseover', () => {
    video.style.display = "block";
    profileImg.style.display = "none";
});

video.addEventListener('mouseout', () => {
        video.style.display = "none";
        profileImg.style.display = "block";})
