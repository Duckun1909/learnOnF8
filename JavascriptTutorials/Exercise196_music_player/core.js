var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

let musicBox = $("#musicBox")
var songRender = $(".body_item-songlist")
var disc = $(".body_item-disc .disc-image")
var circleProgess = $(".body_item-disc .circle .progress-circle")
var taskPlayIcon = $(".taskbar-play i")
var btnPlay = $(".taskbar-play")
var musicProgress = $(".progress-music")
let musicList;
let musicID;
let musicDuration;
let autoPlayInterval
let active;
function start(){
  getMusics()
}
start()

function getMusics(){
    var request = {
      method: "GET",
      headers: "application/json"
    }
    fetch(musicAPI)
    .then(function(res){
      return res.json()
    })
    .then(function(musics){
      musicList= musics
      renderMusics(musicList)
    })
}



function renderMusics(musics){
    var html = musics.map(function(item){
        return `
        <div class="songlist-item row align-item-center justify-content-center songlist-item--active" onclick="choiceSong(${item.id})">
          <div class="songlist-item-img col-2">
              <div style="background-image: url(${item.image});"></div>
          </div>
          <div class="songlist-item-title col-8">
              <h2 class="fs-13">${item.name}</h2>
              <h6>${item.author}</h6>
          </div>
          <div class="songlist-item-choice col-2 text-align-center">
              <i class="fa-solid fa-ellipsis fs-13"></i>
          </div>
        </div>
        `
    }).join("")

    songRender.innerHTML = html
}

musicBox.onloadedmetadata = function(){
  musicDuration = Math.round(musicBox.duration)
  musicProgress.setAttribute("max", musicDuration)
  circleProgess.style = `animation: circle-progress ${musicDuration}s linear !important`
  clearInterval(autoPlayInterval) 
  play()
  musicProgress.value = 0
  active = true
  musicProgress.disabled = false
}

function choiceSong(id){
  musicID = id
  var link = musicList.find(function(item){
    return item.id == musicID
  })
  disc.style.backgroundImage = `url(${link.image})`
  circleProgess.removeAttribute("style")
  musicBox.setAttribute("src", link.mp3) 
}

function play(){
  taskPlayIcon.classList.replace("fa-play", "fa-pause")
  btnPlay.setAttribute("onclick", "stop()")
  circleProgess.style.animationPlayState="running"
  var duration = Math.round(musicDuration-musicBox.currentTime)
  autoPlay(duration)
  musicBox.play();
}

function stop(){
  taskPlayIcon.classList.replace("fa-pause", "fa-play")
  btnPlay.setAttribute("onclick", "play()")
  circleProgess.style.animationPlayState="paused"
  clearInterval(autoPlayInterval) 
  musicBox.pause()
}

function previous(){
  if(active){
    musicID = musicID==musicList[0].id?musicList[musicList.length-1].id + 1:musicID
    console.log(musicID)
    var link = musicList.filter(function(item){
      return item.id < musicID
    }).pop()
    musicID = link.id
    console.log(link)
    disc.style.backgroundImage = `url(${link.image})`
    circleProgess.removeAttribute("style")
    musicBox.setAttribute("src", link.mp3) 
  }
}

function next(){
  if(active){
    musicID = musicID==musicList[musicList.length-1].id?0:musicID
    var link = musicList.find(function(item){
      return item.id > musicID
    })
    musicID = link.id
    console.log(link)
    disc.style.backgroundImage = `url(${link.image})`
    circleProgess.removeAttribute("style")
    musicBox.setAttribute("src", link.mp3) 
  }
}

function replay(){
  if(active){
    $(".taskbar-replay").classList.toggle("taskbar-replay--active")
    if($(".taskbar-replay").classList.contains("taskbar-replay--active")){
      musicBox.loop = true
    }else{
      musicBox.loop = false
    }
    console.log(musicID)
  }
}

function autoPlay(duration){
  autoPlayInterval = setInterval(function(){
    musicID = musicID==musicList[musicList.length-1].id?musicList[0].id-1:musicID
    var link = musicList.find(function(item){
      return item.id > musicID
    })
    disc.style.backgroundImage = `url(${link.image})`
    circleProgess.removeAttribute("style")
    musicBox.setAttribute("src", link.mp3)
    musicID=link.id
  }, duration*1000)
}

musicProgress.onchange = function(e){
    if(active){
      musicBox.currentTime = this.value
      var remainTime = this.max - this.value
      circleProgess.style.strokeDashoffset = Math.round(remainTime)
      console.log(document.styleSheets[0].cssRules[33])
      clearInterval(autoPlayInterval)
      autoPlay(remainTime)
    }
}

