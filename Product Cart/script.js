document.querySelectorAll('.btn-plus').forEach(button => {
    button.addEventListener('click', function () {
        const product = button.closest('.product');
        const countElement = product.querySelector('.count');
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;

        updateSelectedItems(product);
    });
});

document.querySelectorAll('.btn-minus').forEach(button => {
    button.addEventListener('click', function () {
        const product = button.closest('.product');
        const countElement = product.querySelector('.count');
        let count = parseInt(countElement.textContent);
        if (count > 0) {
            count--;
            countElement.textContent = count;

            updateSelectedItems(product);
        }
    });
});

function updateSelectedItems(product) {
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));
    const count = parseInt(product.querySelector('.count').textContent);

    const selectedItemsContainer = document.querySelector('.selected-items');
    let selectedItem = selectedItemsContainer.querySelector(`[data-name="${productName}"]`);
    const noItemsMessage = document.querySelector('.no-items');

    if (count > 0) {
        if (noItemsMessage) {
            noItemsMessage.remove();
        }
        const itemTotalPrice = productPrice * count;
        if (!selectedItem) {
            selectedItem = document.createElement('div');
            selectedItem.classList.add('selected-item');
            selectedItem.setAttribute('data-name', productName);
            selectedItemsContainer.appendChild(selectedItem);
        }
        selectedItem.textContent = `${productName} - ${productPrice.toFixed(2)} x ${count} = ${itemTotalPrice.toFixed(2)}`;
    } else {
        if (selectedItem) {
            selectedItemsContainer.removeChild(selectedItem);
        }
    }

    if (selectedItemsContainer.children.length === 0) {
        selectedItemsContainer.innerHTML = '<p class="no-items">No product added to cart </p>';
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    const selectedItems = document.querySelectorAll('.selected-item');
    let totalPrice = 0;

    selectedItems.forEach(item => {
        const productName = item.getAttribute('data-name');
        const product = document.querySelector(`.product[data-name="${productName}"]`);
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const count = parseInt(product.querySelector('.count').textContent);
        totalPrice += productPrice * count;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}