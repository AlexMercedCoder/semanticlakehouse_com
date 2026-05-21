---
title: "Manifest File"
description: "An Iceberg metadata file tracking the physical data files associated with a specific table snapshot."
related: ["manifest-list", "table-metadata-spec", "apache-iceberg"]
---

**Manifest File** is a metadata file in the Apache Iceberg specification that tracks a subset of physical data files (such as Parquet or ORC) associated with a table. It records file paths, partition details, and column statistics.

## How it Works

Iceberg avoids directory listing scans by maintaining explicit lists of physical data files inside manifest files.

- **File Tracking**: Records the exact path, format, and status (added or deleted) of each physical data file associated with a table write.
- **Partition Metadata**: Stores partition specifications for each file, enabling query engines to prune irrelevant partitions without scanning the files.
- **Column Statistics**: Stores upper and lower bounds for column values, allowing query engines to skip files that do not contain the filtered values.

## Lakehouse & Agentic Relevance

In a data lakehouse, manifest files are crucial for optimizing query performance at scale. When an AI agent generates a query filtering on specific column values, Dremio reads the manifest files first. By analyzing the column statistics within the manifest files, Dremio skips reading irrelevant files from object storage. This reduces input-output (I/O) overhead and accelerates query execution, providing agents with rapid responses.
