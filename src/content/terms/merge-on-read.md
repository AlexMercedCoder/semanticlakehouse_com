---
title: "Merge on Read"
description: "A write strategy that logs changes to separate delta files, resolving merges dynamically during queries."
related: ["copy-on-write", "compaction", "write-amplification"]
---

**Merge on Read** (MoR) is an open table write strategy that logs modifications, insertions, and deletions to separate sidecar delta files instead of immediately rewriting existing data files. This minimizes write latency during ingestion.

## How it Works

MoR optimizes write performance by deferring the merge overhead to the read phase.

- **Positional Delete Files**: Records the exact file paths and row positions of deleted records in separate index files.
- **Equality Delete Files**: Records values that identify deleted records based on matching column values (e.g., deleting all records where `status = inactive`).
- **Dynamic Merging**: When a query executes, the engine reads the original data files and applies the delete/delta files on the fly, returning only active rows.

## Lakehouse & Agentic Relevance

In a data lakehouse, low-latency ingestion is vital for real-time applications. MoR is the preferred write strategy for high-frequency streaming data because it reduces write amplification. However, resolving merges at query time increases read latency. For AI agents requiring fast responses, this overhead can be a bottleneck. Dremio offsets this penalty by leveraging its high-performance execution engine and pre-computed Arrow cache, accelerating the dynamic resolution of MoR tables for downstream analytical queries.
