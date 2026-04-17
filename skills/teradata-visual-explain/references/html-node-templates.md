# HTML Node Templates for EXPLAIN Flow Diagrams

Use these structural patterns when building each section of the flow diagram HTML.

## Flow Node (one per EXPLAIN step)

```html
<div class="flow-node [critical|warning|good|info]" data-step="N"
     data-confidence="[high|low|none]" data-time="0.03"
     data-product-join="true">
    <div class="node-header">
        <div class="node-step">Step N</div>
        <div class="node-type">[ALL-AMP]</div>
        <div class="confidence-badge [high|low|none]">HIGH</div>
    </div>
    <div class="node-title">Human-readable description of operation</div>
    <div class="node-metrics">
        <span class="metric-label">Rows</span><span class="metric-value">1,250,000</span>
        <span class="metric-label">Size</span><span class="metric-value">573 MB</span>
        <span class="metric-label">Time</span><span class="metric-value">2.5s (18%)</span>
        <span class="metric-label">Method</span><span class="metric-value">Hash join</span>
    </div>
    <div class="tooltip-content">
        <strong>Purpose:</strong> ...<br>
        <strong>Technical:</strong> Join condition: A.id = B.id<br>
        <strong>Performance:</strong> Why fast or slow<br>
        <strong>Issue:</strong> Specific problem if any<br>
        <strong>Fix:</strong> Immediate optimization action
    </div>
</div>
```

### Data attribute conventions

| Attribute | Required | Values | Purpose |
|-----------|----------|--------|---------|
| `data-step` | Yes | Step number (e.g. `"3"`, `"2.1"`) | Identifies the step for interactive highlights |
| `data-confidence` | When applicable | `high`, `low`, `none` | Used by "Highlight No Confidence" button |
| `data-time` | When applicable | Seconds as string (e.g. `"0.03"`) | Used by "Highlight Critical Path" to rank steps |
| `data-product-join` | Only on product joins | `"true"` | Used by "Highlight Product Joins" button |

### Severity → CSS class mapping

| Severity | CSS class | Border color |
|----------|-----------|-------------|
| Critical (product join, >15% time, no confidence on large table) | `critical` | `#C0392B` red |
| Warning (low confidence, 5-15% time, large spool) | `warning` | `#FF5F02` orange |
| Good (high confidence, PI access, efficient) | `good` | `#27AE60` green |
| Info (standard operation, locks, output) | `info` | `#4A90E2` blue |

## Arrow Between Steps

```html
<div class="flow-arrow">
    <div class="arrow-line"></div>
    <div class="arrow-label">Spool 3: 573 MB, 46,005 rows</div>
</div>
```

Always include spool name and size in the arrow label.

## Parallel Execution Block

```html
<div class="parallel-start">◆ PARALLEL EXECUTION START (Steps 3.1–3.3)</div>
<div class="flow-row parallel">
    <!-- Nodes rendered side-by-side using flex-direction: row -->
    <div class="parallel-branch">
        <!-- flow-node + flow-arrow for branch A -->
    </div>
    <div class="parallel-branch">
        <!-- flow-node + flow-arrow for branch B -->
    </div>
</div>
<div class="parallel-end">◆ PARALLEL EXECUTION COMPLETE</div>
```

## Confidence Indicator Text (for non-HTML contexts)

- `●●●●●` High Confidence
- `●●●○○` Low Confidence
- `○○○○○` No Confidence
- `●●●●◆` Index Join Confidence
