// Define an array of Harry Potter books
const harryPotterBooks = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", year: 1999 },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", year: 2000 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", year: 2003 },
    { title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", year: 2005 },
    { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", year: 2007 }
  ];
  
  // Get the table body element
  const tableBody = document.querySelector('#bookTable tbody');
  
  // Iterate over the array and create table rows dynamically
  harryPotterBooks.forEach(book => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
    `;
    tableBody.appendChild(row);
  });
  