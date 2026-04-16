/*
 * Interactive controls for EXPLAIN flow diagrams.
 * Include verbatim in every generated HTML file inside a <script> tag.
 *
 * Required buttons in the HTML:
 *   "Highlight Critical Path"   → calls highlightCriticalPath()
 *   "Highlight Product Joins"   → calls highlightProductJoins()
 *   "Highlight No Confidence"   → calls highlightNoConfidence()
 *   "Reset"                     → calls resetHighlights()
 *
 * Each .flow-node must carry data attributes:
 *   data-step="N"                    — step number
 *   data-confidence="high|low|none"  — confidence level
 *   data-time="0.03"                 — estimated time in seconds
 *   data-product-join="true"         — present only on product join nodes
 */

function getAllNodes() {
    return document.querySelectorAll('.flow-node');
}

function resetHighlights() {
    getAllNodes().forEach(node => {
        node.classList.remove('faded', 'highlighted', 'highlighted-warning');
        node.style.boxShadow = '';
        node.style.transform = '';
        node.style.opacity = '';
    });
    document.querySelectorAll('.ctrl-btn').forEach(btn => btn.classList.remove('active'));
}

function highlightCriticalPath() {
    resetHighlights();
    // Find top 5 steps by estimated time
    const nodes = Array.from(getAllNodes()).filter(n => n.dataset.time);
    nodes.sort((a, b) => parseFloat(b.dataset.time) - parseFloat(a.dataset.time));
    const topSteps = nodes.slice(0, 5).map(n => n.dataset.step);

    getAllNodes().forEach(node => {
        if (topSteps.includes(node.dataset.step)) {
            node.classList.add('highlighted');
        } else {
            node.classList.add('faded');
        }
    });
}

function highlightProductJoins() {
    resetHighlights();
    getAllNodes().forEach(node => {
        if (node.dataset.productJoin === 'true') {
            node.classList.add('highlighted-warning');
        } else {
            node.classList.add('faded');
        }
    });
}

function highlightNoConfidence() {
    resetHighlights();
    getAllNodes().forEach(node => {
        if (node.dataset.confidence === 'none') {
            node.classList.add('highlighted');
        } else {
            node.classList.add('faded');
        }
    });
}
