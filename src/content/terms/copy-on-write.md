---
title: "Copy on Write"
description: "A write strategy that immediately creates a new data file combining changes with unmodified data."
related: ["merge-on-read", "compaction", "write-amplification"]
---

**Copy on Write** (CoW) is an open table write strategy where any update or deletion of a record triggers the immediate rewriting of the entire physical data file containing that record. This optimizes table layout for subsequent read operations.

## How it Works

CoW prioritizes query read performance by ensuring that data files do not require dynamic merging at read time.

- **File Identification**: The write engine identifies which physical data files contain the records targeted for update or deletion.
- **Immediate Rewrite**: Generates a new version of those data files, incorporating the changes alongside unmodified rows in the file.
- **Commit Pointer Update**: Writes a new metadata commit that replaces the reference to the old data files with the newly written files.

## Lakehouse & Agentic Relevance

In a data lakehouse, CoW is ideal for tables with high read frequency and low update volume. Because CoW tables require no dynamic merging during queries, they offer the lowest query latency, which is optimal for AI agents executing analytical tasks. Dremio leverages CoW tables in Apache Iceberg to execute high-speed scans and aggregations. For agents that require rapid responses, utilizing CoW formats on read-heavy datasets guarantees that Dremio can return results with minimum overhead.
