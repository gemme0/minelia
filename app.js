
setInterval(() => {
    const today =new Date().getTime()
    const event = new Date("2024-08-30 20:00:00").getTime()
    const difference = event - today

    const days = Math.floor(difference / (1000 * 60 *60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutes = Math.floor((difference % (1000 * 60 *60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    document.getElementById("days").innerText = days + "j"
    document.getElementById("hours").innerText = hours + "h"
    document.getElementById("minutes").innerText = minutes + "m"
    document.getElementById("seconds").innerText = seconds + "s"

}, 1000)