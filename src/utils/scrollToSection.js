const getNavigationOffset = () => (window.innerWidth >= 1024 ? 75 : 70);

export const scrollToSection = (targetId) => {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return;
  }

  const getTargetPosition = () =>
    Math.max(
      0,
      targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        getNavigationOffset()
    );

  window.scrollTo({
    top: getTargetPosition(),
    behavior: "smooth",
  });

  if (targetId === "next-steps") {
    [350, 800].forEach((delay) => {
      window.setTimeout(() => {
        window.scrollTo({
          top: getTargetPosition(),
          behavior: "smooth",
        });
      }, delay);
    });
  }
};
