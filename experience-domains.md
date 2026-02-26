---
layout: page
title: Experience & Domains
permalink: /experience-domains/
---

## Experience & Domains

<details class="domain-details">
  <summary>AI</summary>
  <details class="project-details">
    <summary>Micro1: LLM Contextual Advertising Domain Leadership &amp; A/B-Validated Decision Playbooks</summary>
    <ul>
      <li>LLM Contextual Advertising Domain Leadership &amp; A/B-Validated Decision Playbooks</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Alignerr: Frontier LLM Capability Boundary Probing via Graduate-Level Physics &amp; Risk-Engineering Benchmarks</summary>
    <ul>
      <li>Frontier LLM Capability Boundary Probing via Graduate-Level Physics &amp; Risk-Engineering Benchmarks</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Alignerr: End-to-End RLHF Preference Data Engineering with Scenario Design, Rubrics &amp; A/B Ranking Signals</summary>
    <ul>
      <li>End-to-End RLHF Preference Data Engineering with Scenario Design, Rubrics &amp; A/B Ranking Signals</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Duke University: Sustainability Event Intelligence Labeling for Equity Research Backtests &amp; AI Workflows</summary>
    <ul>
      <li>Sustainability Event Intelligence Labeling for Equity Research Backtests &amp; AI Workflows</li>
    </ul>
  </details>
</details>

<details class="domain-details">
  <summary>Finance</summary>
  <details class="project-details">
    <summary>Jones Lang LaSalle (JLL)</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>SAIF Partners (SoftBank Asia Infrastructure Funds)</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>CITIC Securities</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
</details>

<details class="domain-details">
  <summary>Data</summary>
  <details class="project-details">
    <summary>Jiritsu Network</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Euromonitor International</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>China Construction Bank Asia</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
</details>

<details class="domain-details">
  <summary>ESG</summary>
  <details class="project-details">
    <summary>Duke Law School</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Nicholas School (Stewardship)</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Hubble Network</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Nicholas School (Consulting)</summary>
    <ul>
      <li>Project details from source material.</li>
    </ul>
  </details>
</details>

<details class="domain-details">
  <summary>Core Capabilities</summary>
  <details class="project-details">
    <summary>Financial Modeling &amp; Investment</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Mathematics</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Data &amp; AI</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Analytics &amp; Tools</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Communication</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
  <details class="project-details">
    <summary>Languages</summary>
    <ul>
      <li>Additional Information summary from source material.</li>
    </ul>
  </details>
</details>

<script>
  (function () {
    var domains = document.querySelectorAll(".domain-details");

    domains.forEach(function (domain) {
      domain.addEventListener("toggle", function () {
        if (!domain.open) {
          domain.querySelectorAll(".project-details[open]").forEach(function (project) {
            project.open = false;
          });
          return;
        }

        domains.forEach(function (otherDomain) {
          if (otherDomain !== domain) {
            otherDomain.open = false;
            otherDomain.querySelectorAll(".project-details[open]").forEach(function (project) {
              project.open = false;
            });
          }
        });
      });

      var projects = domain.querySelectorAll(".project-details");
      projects.forEach(function (project) {
        project.addEventListener("toggle", function () {
          if (!project.open) {
            return;
          }

          projects.forEach(function (otherProject) {
            if (otherProject !== project) {
              otherProject.open = false;
            }
          });
        });
      });
    });
  })();
</script>
