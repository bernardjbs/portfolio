<template>
  <!-- Desktop: wide 3-tier -->
  <svg
    viewBox="0 0 700 380"
    xmlns="http://www.w3.org/2000/svg"
    class="architecture-diagram desktop-diagram"
  >
    <!-- Tier 1: Frontend -->
    <rect x="100" y="15" width="400" height="80" rx="10" class="box frontend" />
    <text x="300" y="42" class="box-title">Vue 3 + Quasar SPA</text>
    <text x="300" y="62" class="box-sub">Pinia Stores | Luxon | Vue Router Guards</text>
    <text x="300" y="80" class="box-sub">3-Step Onboarding Wizard</text>

    <line x1="300" y1="95" x2="300" y2="130" class="arrow" marker-end="url(#tc-arrow-d)" />
    <text x="310" y="118" class="label">Sanctum SPA Auth</text>
    <text x="310" y="130" class="label-sub">CSRF + Session</text>

    <!-- Tier 2: Backend -->
    <rect x="60" y="140" width="480" height="90" rx="10" class="box backend" />
    <text x="300" y="168" class="box-title">Laravel 11</text>
    <text x="300" y="190" class="box-sub">Sanctum | OnboardingService | Form Requests</text>
    <text x="300" y="208" class="box-sub">API Resources | OnboardedMiddleware | Rate Limiting</text>

    <line x1="300" y1="230" x2="300" y2="268" class="arrow" marker-end="url(#tc-arrow-d)" />
    <text x="310" y="253" class="label">Eloquent ORM</text>

    <!-- Tier 3: Database -->
    <rect x="100" y="275" width="250" height="65" rx="10" class="box database" />
    <text x="225" y="302" class="box-title">MySQL</text>
    <text x="225" y="322" class="box-sub">users | password_histories | sessions</text>

    <!-- CI/CD Box -->
    <rect x="420" y="275" width="200" height="65" rx="10" class="box cicd" />
    <text x="520" y="302" class="box-title">GitHub Actions</text>
    <text x="520" y="322" class="box-sub">SSH Deploy &#8594; migrate --force</text>

    <defs>
      <marker id="tc-arrow-d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" class="arrowhead-fill" />
      </marker>
    </defs>
  </svg>

  <!-- Mobile: narrow 3-tier -->
  <svg
    viewBox="0 0 300 520"
    xmlns="http://www.w3.org/2000/svg"
    class="architecture-diagram mobile-diagram"
  >
    <!-- Tier 1: Frontend -->
    <rect x="15" y="10" width="270" height="85" rx="10" class="box frontend" />
    <text x="150" y="35" class="box-title">Vue 3 + Quasar SPA</text>
    <text x="150" y="55" class="box-sub">Pinia | Luxon | Router Guards</text>
    <text x="150" y="73" class="box-sub">Onboarding Wizard</text>

    <line x1="150" y1="95" x2="150" y2="130" class="arrow" marker-end="url(#tc-arrow-m)" />
    <text x="160" y="115" class="label">Sanctum SPA Auth</text>
    <text x="160" y="127" class="label-sub">CSRF + Session</text>

    <!-- Tier 2: Backend -->
    <rect x="15" y="135" width="270" height="110" rx="10" class="box backend" />
    <text x="150" y="160" class="box-title">Laravel 11</text>
    <text x="150" y="180" class="box-sub">Sanctum | OnboardingService</text>
    <text x="150" y="198" class="box-sub">Form Requests | API Resources</text>
    <text x="150" y="216" class="box-sub">Middleware | Rate Limiting</text>

    <line x1="150" y1="245" x2="150" y2="280" class="arrow" marker-end="url(#tc-arrow-m)" />
    <text x="160" y="267" class="label">Eloquent ORM</text>

    <!-- Tier 3: Database -->
    <rect x="15" y="285" width="270" height="65" rx="10" class="box database" />
    <text x="150" y="312" class="box-title">MySQL</text>
    <text x="150" y="332" class="box-sub">users | password_histories | sessions</text>

    <!-- CI/CD Box -->
    <rect x="15" y="370" width="270" height="55" rx="10" class="box cicd" />
    <text x="150" y="393" class="box-title">GitHub Actions</text>
    <text x="150" y="411" class="box-sub">SSH Deploy &#8594; migrate --force</text>

    <defs>
      <marker id="tc-arrow-m" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" class="arrowhead-fill" />
      </marker>
    </defs>
  </svg>
</template>

<style scoped lang="scss">
.architecture-diagram {
  width: 100%;
  height: auto;
  font-family: 'Roboto', sans-serif;
}

.desktop-diagram {
  display: block;

  @media (max-width: $breakpoint-sm-max) {
    display: none;
  }
}

.mobile-diagram {
  display: none;

  @media (max-width: $breakpoint-sm-max) {
    display: block;
  }
}

.box {
  stroke-width: 1.5;
}

.box.frontend {
  fill: #EBF4FF;
  stroke: #4299E1;
}

.box.backend {
  fill: #FFF5F5;
  stroke: #FC8181;
}

.box.database {
  fill: #F0FFF4;
  stroke: #68D391;
}

.box.cicd {
  fill: #FEFCBF;
  stroke: #ECC94B;
}

.box-title {
  font-size: 14px;
  font-weight: 700;
  fill: #2D3748;
  text-anchor: middle;
}

.box-sub {
  font-size: 11px;
  fill: #4A5568;
  text-anchor: middle;
}

.label {
  font-size: 10px;
  font-weight: 600;
  fill: #718096;
}

.label-sub {
  font-size: 9px;
  fill: #A0AEC0;
}

.arrow {
  stroke: #A0AEC0;
  stroke-width: 2;
}

.arrowhead-fill {
  fill: #A0AEC0;
}
</style>
