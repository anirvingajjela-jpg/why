async function initDirectory() {
    const container = document.getElementById('event-container');
    if (!container) return;

    try {
       
        const path = window.location.pathname.includes('browse') ? '../resource/resources.json' : 'resource/resources.json';
        const response = await fetch(path);
        const data = await response.json();
        
        container.innerHTML = '';

        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'filtered-event';
            
            // This is the "Cool" part: Staggered animation 
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <img src="${item.image}" class="filev-img" alt="${item.name}">
                <div class="caption">
                    <span class="category-tag">${item.tags[0]}</span>
                    <h4 style="margin: 0 0 10px 0; font-size: 1.2rem;">${item.name}</h4>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">${item.tags.join(' • ')}</p>
                    <a href="${window.location.pathname.includes('browse') ? '../resource/index.html' : 'resource/index.html'}?id=${item.id}" 
                       class="cta-primary" style="padding: 8px 16px; font-size: 0.8rem; border-radius: 4px; background: var(--accent); color: white; text-decoration: none;">
                       View Details
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        console.error("Directory Load Error:", e);
        container.innerHTML = "<p>Resources are currently unavailable.</p>";
    }
}

document.addEventListener('DOMContentLoaded', initDirectory);