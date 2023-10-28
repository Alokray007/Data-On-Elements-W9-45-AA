document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add");
    const nameInput = document.getElementById("name");
    const typeSelect = document.getElementById("type");
    const shoppingList = document.getElementById("shopping-list");

    addButton.addEventListener("click", e => {
        e.preventDefault();

        const itemName = nameInput.value
        const itemType = typeSelect.value

        if (itemName.trim() === "") {
            alert("Please enter an item name.");
            return;
        }

        const listItem = document.createElement("li")
        listItem.textContent = itemName;
        listItem.setAttribute("data-type", itemType);

        shoppingList.appendChild(listItem);

        // Clear the input fields after adding the item
        nameInput.value = "";
        typeSelect.selectedIndex = 0;
    });
});
