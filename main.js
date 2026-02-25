function stripLeadingNumbering(text) {
  return text.replace(/^\s*\d+(?:\.\d+)*\s*(?:[.)]|[-:])?\s*/, "");
}

function setupNumberingRemoval() {
  const targets = document.querySelectorAll("[data-strip-numbering='true']");
  targets.forEach((element) => {
    element.textContent = stripLeadingNumbering(element.textContent);
  });
}

function setupAccordions() {
  const domains = Array.from(document.querySelectorAll("details.domain"));
  const projects = Array.from(document.querySelectorAll("details.project"));

  if (!domains.length && !projects.length) {
    return;
  }

  domains.forEach((domain) => {
    domain.addEventListener("toggle", () => {
      if (domain.open) {
        domains.forEach((otherDomain) => {
          if (otherDomain !== domain) {
            otherDomain.open = false;
          }
        });
      } else {
        domain.querySelectorAll("details.project[open]").forEach((project) => {
          project.open = false;
        });
      }
    });
  });

  projects.forEach((project) => {
    project.addEventListener("toggle", () => {
      if (!project.open) {
        return;
      }

      projects.forEach((otherProject) => {
        if (otherProject !== project) {
          otherProject.open = false;
        }
      });

      const parentDomain = project.closest("details.domain");
      if (parentDomain && !parentDomain.open) {
        parentDomain.open = true;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNumberingRemoval();
  setupAccordions();
});

