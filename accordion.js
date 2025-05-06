function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');
  const multiSelect = document.getElementById('multiselect');

  if (accordions.length > 0) {
    accordions[0].classList.add('expanded');
  }

  accordions.forEach((accordion) => {
    const titleSection = accordion.querySelector('.title-section');
    titleSection.addEventListener('click', () => {
      const isExpanded = accordion.classList.contains('expanded');
      if (!multiSelect.checked) {
        accordions.forEach((acc) => acc.classList.remove('expanded'));

        if (!isExpanded) {
          accordion.classList.add('expanded');
        }
      } else {
        accordion.classList.toggle('expanded');
      }
    });
  });
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    initAccordion
  };
} else {
  initAccordion();
}
