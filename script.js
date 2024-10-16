document.querySelectorAll('.collapsible').forEach((collapsible) => {
    collapsible.addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

const toc = document.getElementById('toc');
const headings = document.querySelectorAll('h1, h2');

headings.forEach((heading, index) => {
    let tocItem = document.createElement('li');
    let link = document.createElement('a');
    
    const id = 'section-' + index;
    heading.setAttribute('id', id);
    
    link.textContent = heading.textContent;
    link.setAttribute('href', '#' + id);
    
    tocItem.style.marginLeft = heading.tagName === 'H2' ? '20px' : '0px';
    tocItem.appendChild(link);
    
    toc.appendChild(tocItem);
});
