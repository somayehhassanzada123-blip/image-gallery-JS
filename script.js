const galleryItems = [
  {
    title: "Mountain Escape",
    description: "Discover the beauty of nature.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    alt: "Beautiful mountain landscape"
  },
  {
    title: "Ocean View",
    description: "A peaceful moment by the sea.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    alt: "Blue ocean and beach"
  },
  {
    title: "City Lights",
    description: "The city comes alive after dark.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    alt: "City lights at night"
  },
  {
    title: "Forest Walk",
    description: "Find calm beneath the trees.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85",
    alt: "Green forest"
  },
  {
    title: "Desert Dreams",
    description: "Golden sands as far as the eye can see.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=85",
    alt: "Desert dunes"
  },
  {
    title: "Quiet Lake",
    description: "Still waters and a beautiful view.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    alt: "Lake surrounded by mountains"
  }
];

const mainImage = document.getElementById("mainImage");
const imageTitle = document.getElementById("imageTitle");
const imageDescription = document.getElementById("imageDescription");
const imageNumber = document.getElementById("imageNumber");
const thumbnails = document.querySelectorAll(".thumbnail");

function showImage(index) {
  const item = galleryItems[index];

  mainImage.src = item.image;
  mainImage.alt = item.alt;
  imageTitle.textContent = item.title;
  imageDescription.textContent = item.description;
  imageNumber.textContent = `${String(index + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;

  thumbnails.forEach((thumbnail, thumbnailIndex) => {
    thumbnail.classList.toggle("active", thumbnailIndex === index);
  });
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    showImage(Number(thumbnail.dataset.index));
  });
});
