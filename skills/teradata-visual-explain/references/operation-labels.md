# Operation Type Labels

Standardized labels for EXPLAIN step types. Use these in the `node-type` badge of each flow node.

| EXPLAIN Text | Label | Notes |
|---|---|---|
| all-AMPs RETRIEVE | `[ALL-AMP]` | |
| single-AMP RETRIEVE | `[1-AMP]` | Best access |
| hash join | `[HASH-J]` | |
| merge join | `[MERGE-J]` | |
| product join | `[PROD-J]` | Always flag as critical |
| nested join | `[NEST-J]` | |
| SORT | `[SORT]` | |
| aggregate/SUM | `[AGG]` | |
| redistribute | `[REDIST]` | |
| duplicate on all AMPs | `[DUP-ALL]` | |
| lock | `[LOCK]` | |
| output to user | `[OUTPUT]` | |
| STAT FUNCTION | `[STAT]` | TOP N, OLAP functions |
