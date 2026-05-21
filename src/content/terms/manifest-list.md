---
title: "Manifest List"
description: "An Iceberg metadata file containing details about all the manifest files in a single table snapshot."
related: ["manifest-file", "table-metadata-spec", "apache-iceberg"]
---

**Manifest List** is a metadata file in the Apache Iceberg format that represents a single snapshot of a table. It lists all the manifest files that make up that snapshot, providing a unified view of the table's state.

## How it Works

When a write transaction commits, Iceberg generates a new snapshot mapped to a manifest list.

- **Snapshot Metadata**: Contains the snapshot ID, parent snapshot ID, creation timestamp, and the summary of changes (e.g., records added).
- **Manifest Tracking**: Lists the file paths of all active manifest files associated with the snapshot.
- **Partition Summary**: Stores the range of partition values contained in each manifest file. Query engines scan these summaries to skip entire manifest files during query execution.

## Lakehouse & Agentic Relevance

In a data lakehouse, manifest lists enable transaction isolation and time travel capabilities. Because each manifest list represents a complete snapshot, query engines can access previous table states. If an autonomous agent needs to query historical data or run transaction-consistent audits, it leverages these snapshot states. Dremio queries the manifest list to identify the active files for any given snapshot, executing queries without locking the table.
