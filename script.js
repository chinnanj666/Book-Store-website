document.addEventListener('DOMContentLoaded', function() {
    const addBookForm = document.getElementById('add-book-form');
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');
    const filterCategory = document.getElementById('filter-category');
    const filteredResults = document.getElementById('filtered-results');

    let books = [];

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        books.push({ title, author, category });
        addBookForm.reset();
        displayBooks();
    });

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks, searchResults);
    });

    filterCategory.addEventListener('change', function() {
        const category = filterCategory.value;
        const filteredBooks = category === 'all' ? books : books.filter(book => book.category.toLowerCase() === category);
        displayBooks(filteredBooks, filteredResults);
    });

    function displayBooks(filteredBooks = books, container = document.createElement('div')) {
        container.innerHTML = '';
        filteredBooks.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.textContent = `${book.title} by ${book.author} (${book.category})`;
            container.appendChild(bookItem);
        });
    }
});
