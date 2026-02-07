
function surpriseMe() {
 
    fetch('resource/resources.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
        
            window.location.href = `resource/index.html?id=${randomIndex}`;
        })
        .catch(err => console.error("Error fetching resources:", err));
}