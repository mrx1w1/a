fetch("https://secure.preloved.co.uk/eu?qs=JfkBZrgTL0VCtZgIw6lL6EA_j00EGEiqUdWHHlvAjiWXhIIyFgVmNA")
  .then(res => res.text())
  .then(html => {
    // Parse the fetched HTML into a DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Now you can query the DOM from that source code
    const link = [...doc.querySelectorAll('a')]
      .find(a => a.textContent.trim() === 'Close Account');

    if (link) {
      fetch(link.href);
    }
  })
  .catch(err => console.error(err));

