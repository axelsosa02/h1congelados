document.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementById("modal");
    let closeModalBtn = document.getElementById("closeModal");

    function showModal() {
        modal.classList.remove("hidden");
    }

    function hideModal() {
        modal.classList.add("hidden");
    }

    closeModalBtn.addEventListener("click", hideModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    //sirve para que pueda ser llamado desde otros scripts
    window.showModal = showModal;
});