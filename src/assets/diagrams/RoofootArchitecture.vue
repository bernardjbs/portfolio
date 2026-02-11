<template>
  <!-- Desktop: horizontal 4-lane flow -->
  <svg
    viewBox="0 0 900 260"
    xmlns="http://www.w3.org/2000/svg"
    class="architecture-diagram desktop-diagram"
  >
    <!-- Lane 1: Data Sources -->
    <rect x="10" y="80" width="140" height="90" rx="10" class="box source" />
    <text x="80" y="115" class="box-title">Football Sites</text>
    <text x="80" y="138" class="box-sub">Fixtures, Odds</text>
    <text x="80" y="155" class="box-sub">Results</text>

    <line x1="155" y1="125" x2="210" y2="125" class="arrow" marker-end="url(#rf-arrow-d)" />

    <!-- Lane 2: Scraper -->
    <rect x="215" y="50" width="210" height="150" rx="10" class="box scraper" />
    <text x="320" y="82" class="box-title">Playwright Pool</text>
    <text x="320" y="105" class="box-sub">generic-pool</text>
    <text x="320" y="128" class="box-sub">Stealth: UA Rotation</text>
    <text x="320" y="148" class="box-sub">Navigator Overrides</text>
    <text x="320" y="172" class="box-sub">Selector Engine (DB)</text>

    <rect x="250" y="215" width="140" height="35" rx="8" class="box tool" />
    <text x="320" y="237" class="box-sub tool-text">selector-cli (Commander)</text>
    <line x1="320" y1="200" x2="320" y2="215" class="arrow-dashed" marker-end="url(#rf-arrow-d)" />

    <line x1="430" y1="125" x2="485" y2="125" class="arrow" marker-end="url(#rf-arrow-d)" />

    <!-- Lane 3: Queues -->
    <rect x="490" y="50" width="180" height="150" rx="10" class="box queue" />
    <text x="580" y="82" class="box-title">BullMQ</text>
    <text x="580" y="108" class="box-sub">fixtures (6h)</text>
    <text x="580" y="128" class="box-sub">odds (30m)</text>
    <text x="580" y="148" class="box-sub">results (1h)</text>
    <text x="580" y="168" class="box-sub">selector-val (3AM)</text>

    <rect x="520" y="215" width="120" height="35" rx="8" class="box tool" />
    <text x="580" y="237" class="box-sub tool-text">Bull Board</text>
    <line x1="580" y1="200" x2="580" y2="215" class="arrow-dashed" marker-end="url(#rf-arrow-d)" />

    <line x1="675" y1="125" x2="730" y2="125" class="arrow" marker-end="url(#rf-arrow-d)" />

    <!-- Lane 4: Storage -->
    <rect x="735" y="55" width="150" height="70" rx="10" class="box storage" />
    <text x="810" y="78" class="box-title">MySQL 8</text>
    <text x="810" y="95" class="box-sub">Query Builder (Knex.js)</text>
    <text x="810" y="112" class="box-sub">Schema Validation (Zod)</text>

    <rect x="735" y="140" width="150" height="60" rx="10" class="box storage" />
    <text x="810" y="163" class="box-title">Redis 7</text>
    <text x="810" y="180" class="box-sub">Selector Cache + Job Queues</text>

    <defs>
      <marker id="rf-arrow-d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" class="arrowhead-fill" />
      </marker>
    </defs>
  </svg>

  <!-- Mobile: vertical flow -->
  <svg
    viewBox="0 0 300 680"
    xmlns="http://www.w3.org/2000/svg"
    class="architecture-diagram mobile-diagram"
  >
    <!-- Row 1: Data Sources -->
    <rect x="30" y="10" width="240" height="65" rx="10" class="box source" />
    <text x="150" y="35" class="box-title">Football Sites</text>
    <text x="150" y="55" class="box-sub">Fixtures, Odds, Results</text>

    <line x1="150" y1="75" x2="150" y2="100" class="arrow" marker-end="url(#rf-arrow-m)" />

    <!-- Row 2: Scraper -->
    <rect x="30" y="105" width="240" height="120" rx="10" class="box scraper" />
    <text x="150" y="130" class="box-title">Playwright Pool</text>
    <text x="150" y="150" class="box-sub">generic-pool | Stealth</text>
    <text x="150" y="168" class="box-sub">UA Rotation | Nav Overrides</text>
    <text x="150" y="188" class="box-sub">Selector Engine (DB)</text>

    <!-- selector-cli side note -->
    <rect x="80" y="235" width="140" height="30" rx="8" class="box tool" />
    <text x="150" y="254" class="box-sub tool-text">selector-cli (Commander)</text>
    <line x1="150" y1="225" x2="150" y2="235" class="arrow-dashed" marker-end="url(#rf-arrow-m)" />

    <line x1="150" y1="265" x2="150" y2="290" class="arrow" marker-end="url(#rf-arrow-m)" />

    <!-- Row 3: Queues -->
    <rect x="30" y="295" width="240" height="110" rx="10" class="box queue" />
    <text x="150" y="320" class="box-title">BullMQ</text>
    <text x="150" y="342" class="box-sub">fixtures | odds | results</text>
    <text x="150" y="360" class="box-sub">selector-validation</text>

    <!-- Bull Board side note -->
    <rect x="90" y="415" width="120" height="30" rx="8" class="box tool" />
    <text x="150" y="434" class="box-sub tool-text">Bull Board</text>
    <line x1="150" y1="405" x2="150" y2="415" class="arrow-dashed" marker-end="url(#rf-arrow-m)" />

    <line x1="150" y1="445" x2="150" y2="470" class="arrow" marker-end="url(#rf-arrow-m)" />

    <!-- Row 4: Storage -->
    <rect x="30" y="475" width="240" height="60" rx="10" class="box storage" />
    <text x="150" y="498" class="box-title">MySQL 8</text>
    <text x="150" y="516" class="box-sub">Query Builder (Knex.js) | Validation (Zod)</text>

    <rect x="30" y="550" width="240" height="55" rx="10" class="box storage" />
    <text x="150" y="573" class="box-title">Redis 7</text>
    <text x="150" y="591" class="box-sub">Selector Cache + Job Queues</text>

    <defs>
      <marker id="rf-arrow-m" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
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

.box.source {
  fill: #EBF4FF;
  stroke: #4299E1;
}

.box.scraper {
  fill: #FFF5F5;
  stroke: #FC8181;
}

.box.queue {
  fill: #FEFCBF;
  stroke: #ECC94B;
}

.box.storage {
  fill: #F0FFF4;
  stroke: #68D391;
}

.box.tool {
  fill: #F7FAFC;
  stroke: #A0AEC0;
  stroke-dasharray: 4 2;
}

.box-title {
  font-size: 13px;
  font-weight: 700;
  fill: #2D3748;
  text-anchor: middle;
}

.box-sub {
  font-size: 11px;
  fill: #4A5568;
  text-anchor: middle;
}

.tool-text {
  font-size: 10px;
  fill: #718096;
}

.arrow {
  stroke: #A0AEC0;
  stroke-width: 2;
}

.arrow-dashed {
  stroke: #A0AEC0;
  stroke-width: 1.5;
  stroke-dasharray: 4 3;
}

.arrowhead-fill {
  fill: #A0AEC0;
}
</style>
