if("serviceWorker" in navigator){
    navigator.serviceWorker.register("SW.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
   }).catch(error=>{
    console.log("SW Registration Failed!");
    console.log(error);
   });
   }
   function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    document.getElementById('date').textContent =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// Initial call to display clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
