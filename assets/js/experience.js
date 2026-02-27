(function () {
  var page = document.querySelector(".page.experience.domains");
  if (!page) {
    return;
  }

  var triggers = page.querySelectorAll(".experience-accordion-trigger");

  function getPanel(trigger) {
    var panelId = trigger.getAttribute("aria-controls");
    if (!panelId) {
      return null;
    }
    return document.getElementById(panelId);
  }

  function openPanel(trigger, panel) {
    trigger.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    panel.classList.add("is-open");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  function closePanel(trigger, panel) {
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    panel.classList.remove("is-open");
    panel.style.maxHeight = panel.scrollHeight + "px";
    requestAnimationFrame(function () {
      panel.style.maxHeight = "0px";
    });
  }

  triggers.forEach(function (trigger) {
    var panel = getPanel(trigger);
    if (!panel) {
      return;
    }

    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    panel.style.maxHeight = "0px";

    trigger.addEventListener("click", function () {
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closePanel(trigger, panel);
      } else {
        openPanel(trigger, panel);
      }
    });
  });

  window.addEventListener("resize", function () {
    triggers.forEach(function (trigger) {
      if (trigger.getAttribute("aria-expanded") !== "true") {
        return;
      }

      var panel = getPanel(trigger);
      if (panel) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
})();
