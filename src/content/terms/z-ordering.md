---
title: "Z-Ordering"
description: "A multidimensional clustering technique that organizes data files to optimize query filtering on multiple columns."
related: ["compaction", "parquet-format", "open-table-format"]
---

**Z-Ordering** is a multidimensional data clustering technique that maps multi-column values to a one-dimensional space-filling curve. It is used in analytical databases to structure physical data layout, maximizing file-skipping performance across multiple search dimensions.

## How it Works

Unlike linear sorting which treats the first sort key with higher priority, Z-ordering treats all designated columns with equal weight.

- **Interleaving Bits**: Interleaves binary representation values of chosen columns (such as `region` and `product_category`) to assign a single coordinates indicator (a Z-value) to each row.
- **Locality Clustering**: Arranges records sequentially based on their Z-values, ensuring that rows with similar values across all chosen dimensions are grouped into the same physical data files.
- **File Skipping**: Enables query engines to evaluate column bounds in metadata, skipping files that do not overlap with search criteria on any of the Z-ordered fields.

## Lakehouse & Agentic Relevance

In a data lakehouse, query workloads are diverse, and query patterns can filter on multiple different columns. Z-ordering Apache Iceberg tables enables optimal file skipping for these varying queries. When an autonomous agent constructs SQL filters dynamically, Z-ordering ensures that the execution engine is not forced to run full scans. Dremio leverages Z-ordered Iceberg tables, planning and running multi-dimensional range filters at sub-second speeds.
