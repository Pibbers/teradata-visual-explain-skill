# EXPLAIN Key Phrases Glossary

Map these EXPLAIN output phrases to optimizer intent during Step 2 (parsing).

| Phrase | Optimizer Intent |
|--------|-----------------|
| `single-AMP RETRIEVE by way of the unique primary index` | Best-case tactical access, no spool needed |
| `by way of an all-rows scan` | Full table scan — examine predicates, stats, partitioning |
| `redistributed by hash code` | Row movement to co-locate join keys — check skew risk |
| `duplicated on all AMPs` | Broadcast small input — verify it's truly small |
| `(group_amps)` | Spool built on subset of AMPs — potential skew signal |
| `(all_amps)` | Spool built on every AMP — expected for large tables |
| `SORT to order Spool n by row hash` | Preparing for merge/hash join — sorted by rowhash |
| `estimated with no confidence` | Missing statistics — unreliable cardinality estimate |
| `estimated with low confidence` | Partial/stale statistics — conservative planning |
| `estimated with high confidence` | Good statistics — optimizer has reliable estimates |
| `execute the following steps in parallel` | Independent sub-steps dispatched concurrently |
| `RowHash match scan` | Join/read driven by rowhash ordering |
| `eliminating duplicate rows` | DISTINCT or duplicate removal in spool |
