document.getElementById('dropdownButton').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.toggle('show');
});

// Cập nhật nội dung của nút khi chọn một tùy chọn
function selectOption(optionText) {
    document.getElementById('buttonText').textContent = optionText;
    document.getElementById('dropdownMenu').classList.remove('show');
}

// Cập nhật nội dung của nút khi thay đổi giá trị của select
function updateButtonText() {
    const selectElement = document.getElementById('sort_properties');
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    document.getElementById('buttonText').textContent = selectedOption;
}

// Đóng menu khi nhấp ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton') && !event.target.closest('#dropdownMenu')) {
        var dropdowns = document.getElementsByClassName("dropdown_menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
