const videoes = document.querySelectorAll(".video");

if (videoes.length) {
  videoes.forEach((element) => {
    const play = element.querySelector(".video__play");
    const pause = element.querySelector(".video__pause");
    const video = element.querySelector("video");

    play.addEventListener("click", () => {
      video.play();
      play.classList.add("hide");
      pause.classList.remove("hide");
    });

    pause.addEventListener("click", () => {
      video.pause();
      play.classList.remove("hide");
      pause.classList.add("hide");
    });
  });
}
