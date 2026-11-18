
const searchInput = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const noCourses = document.getElementById("noCourses");

let activeCategory = "all";

function filterCourses() {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  courseCards.forEach(card => {
    const category = card.dataset.category;
    const searchableText = (
      card.dataset.title + " " + card.textContent
    ).toLowerCase();

    const matchesCategory =
      activeCategory === "all" || category === activeCategory;

    const matchesSearch = searchableText.includes(searchText);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  noCourses.classList.toggle("hidden", visibleCount > 0);
}

searchInput.addEventListener("input", filterCourses);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("bg-emerald-600", "text-white");
      btn.classList.add("bg-white");
    });

    button.classList.add("bg-emerald-600", "text-white");
    button.classList.remove("bg-white");

    filterCourses();
  });
});
