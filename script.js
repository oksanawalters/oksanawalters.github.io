

// Profile image & video
let profileImg = document.querySelector(".profile-img");
let video = document.querySelector(".profile-video");

profileImg.addEventListener('mouseover', () => {
    video.style.display = "block";
    profileImg.style.display = "none";
});

// let videoEnded = false;
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

//    let myPromise = new Promise(()=>{
//     player.on('ended', function(){
//         videoEnded = true;
//     });
//    })


// myPromise.then(()=>{
//     video.addEventListener('mouseout', () => {
//     video.style.display = "none";
//     profileImg.style.display = "block";})
// });

video.addEventListener('mouseout', () => {
        video.style.display = "none";
        profileImg.style.display = "block";})
