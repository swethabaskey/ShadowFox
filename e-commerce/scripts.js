// Get reference to the input element and all items
const input = document.getElementById('input');
const items = document.querySelectorAll('.items');

// Add event listener for input change
input.addEventListener('input', function() {
  const searchText = input.value.trim().toLowerCase(); // Trim and convert input value to lowercase

  items.forEach(item => {
    const itemName = item.getAttribute('data-name').toLowerCase(); // Get item name attribute and convert to lowercase
    const itemElement = item.closest('.items'); // Get closest item element

    // Check if item name contains the search text
    if (itemName.includes(searchText)) {
      itemElement.style.display = 'block'; // Display the item
    } else {
      itemElement.style.display = 'none'; // Hide the item if it doesn't match
    }
  });
});
