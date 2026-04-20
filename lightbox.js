document.addEventListener("DOMContentLoaded", () => {
    // Create the modal HTML elements and append to body
    const modal = document.createElement("div");
    modal.classList.add("lightbox-modal");
    
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("lightbox-close");
    closeBtn.innerHTML = "&times;";
    
    const modalImg = document.createElement("img");
    modalImg.classList.add("lightbox-content");
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
    
    // Select all images on the page
    const images = document.querySelectorAll("img");
    
    // Add click event to each image
    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("active");
        });
    });
    
    // Close modal when clicking the close button or outside the image
    const closeModal = () => {
        modal.classList.remove("active");
    };
    
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
});
