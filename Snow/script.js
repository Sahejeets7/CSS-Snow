
const timeElement = document.getElementById('time')

displayTime()
setInterval(displayTime,1000)
setInterval(createSnowFlakes,70)


// createSnowFlakes();



function createSnowFlakes(){
    const snowflake = document.createElement('i')
    snowflake.classList.add('fas')
    snowflake.classList.add('fa-snowflake')
    snowflake.style.left = Math.random() * window.innerWidth + 'px'
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'
    snowflake.style.opacity = Math.random()  // between 0 and 1
    snowflake.style.fontSize = Math.random() * 15 + 10 + 'px'  // between 10 and 20

    document.body.appendChild(snowflake)    

    setTimeout(() => {
        snowflake.remove()
    },5000)
}


function displayTime(){
    var date = new Date()
    timeElement.innerText = date.toLocaleTimeString()
}
