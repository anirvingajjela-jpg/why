async function loadResource() {
    try {
      
        const urlParams = new URLSearchParams(window.location.search);
        let resourceId = urlParams.get('id');

    
        const response = await fetch('resources.json');
        const data = await response.json();

     
        if (urlParams.has('random') || resourceId === null) {
            resourceId = Math.floor(Math.random() * data.length);
        }

        const item = data.find(r => r.id == resourceId) || data[0];

        
        const container = document.getElementById('resource-frame');
        container.innerHTML = `
            <div class="resource-detail-grid">
                <div class="resource-image-side">
                    <img src="${item.image}" alt="${item.name}" class="main-resource-img">
                </div>
                <div class="resource-info-side">
                    <span class="category-tag">${item.tags[0]}</span>
                    <h1>${item.name}</h1>
                    <p class="description">${item.description}</p>
                    
                    <div class="meta-box">
                        <p><strong> Location:</strong> ${item.location}</p>
                        <p><strong> Website:</strong> <a href="${item.url}" target="_blank">Visit Official Site</a></p>
                    </div>

                    <div class="action-btns">
                        <a href="../browse/index.html" class="cta-secondary">← Back to Directory</a>
                        <button onclick="window.print()" class="cta-primary">Print Info</button>
                    </div>
                </div>
            </div>
        `;

     
        document.title = `${item.name} | anaCalypto`;

    } catch (error) {
        console.error("Error loading resource:", error);
        document.getElementById('resource-frame').innerHTML = "<h2>Resource not found.</h2>";
    }
}

loadResource();