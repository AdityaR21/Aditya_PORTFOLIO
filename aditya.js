<script>
  // Simple smooth scroll highlight for active nav link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.style.color = link.getAttribute("href").includes(current) 
        ? "#38bdf8" 
        : "#e2e8f0";
    });
  });
</script>

