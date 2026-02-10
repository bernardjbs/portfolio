<template>
  <svg
    viewBox="0 0 900 260"
    xmlns="http://www.w3.org/2000/svg"
    class="architecture-diagram"
  >
    <!-- Lane 1: Data Sources -->
    <rect x="10" y="80" width="140" height="90" rx="10" class="box source" />
    <text x="80" y="115" class="box-title">Football Sites</text>
    <text x="80" y="138" class="box-sub">Fixtures, Odds</text>
    <text x="80" y="155" class="box-sub">Results</text>

    <!-- Arrow 1 -->
    <line x1="155" y1="125" x2="210" y2="125" class="arrow" marker-end="url(#arrowhead)" />

    <!-- Lane 2: Scraper -->
    <rect x="215" y="50" width="210" height="150" rx="10" class="box scraper" />
    <text x="320" y="82" class="box-title">Playwright Pool</text>
    <text x="320" y="105" class="box-sub">generic-pool</text>
    <text x="320" y="128" class="box-sub">Stealth: UA Rotation</text>
    <text x="320" y="148" class="box-sub">Navigator Overrides</text>
    <text x="320" y="172" class="box-sub">Selector Engine (DB)</text>

    <!-- selector-cli label below scraper -->
    <rect x="250" y="215" width="140" height="35" rx="8" class="box tool" />
    <text x="320" y="237" class="box-sub tool-text">selector-cli (Commander)</text>
    <line x1="320" y1="200" x2="320" y2="215" class="arrow-dashed" marker-end="url(#arrowhead)" />

    <!-- Arrow 2 -->
    <line x1="430" y1="125" x2="485" y2="125" class="arrow" marker-end="url(#arrowhead)" />

    <!-- Lane 3: Queues -->
    <rect x="490" y="50" width="180" height="150" rx="10" class="box queue" />
    <text x="580" y="82" class="box-title">BullMQ</text>
    <text x="580" y="108" class="box-sub">fixtures (6h)</text>
    <text x="580" y="128" class="box-sub">odds (30m)</text>
    <text x="580" y="148" class="box-sub">results (1h)</text>
    <text x="580" y="168" class="box-sub">selector-val (3AM)</text>

    <!-- Bull Board label below queues -->
    <rect x="520" y="215" width="120" height="35" rx="8" class="box tool" />
    <text x="580" y="237" class="box-sub tool-text">Bull Board</text>
    <line x1="580" y1="200" x2="580" y2="215" class="arrow-dashed" marker-end="url(#arrowhead)" />

    <!-- Arrow 3 -->
    <line x1="675" y1="125" x2="730" y2="125" class="arrow" marker-end="url(#arrowhead)" />

    <!-- Lane 4: Storage -->
    <rect x="735" y="65" width="150" height="55" rx="10" class="box storage" />
    <text x="810" y="88" class="box-title">MySQL 8</text>
    <text x="810" y="106" class="box-sub">Knex.js + Zod</text>

    <rect x="735" y="135" width="150" height="55" rx="10" class="box storage" />
    <text x="810" y="158" class="box-title">Redis 7</text>
    <text x="810" y="176" class="box-sub">Cache + Queues</text>

    <!-- Arrowhead marker -->
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
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
