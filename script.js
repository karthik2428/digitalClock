function updatetime(){
    const time= new Date();
    let hours = time.getHours();
    
    hours =hours % 12 || 12;
    hours=hours.toString().padStart(2,0);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
   document.getElementById("clock").textContent=formattedTime;
    console.log(formattedTime);
}

updatetime();
setInterval(updatetime,1000);