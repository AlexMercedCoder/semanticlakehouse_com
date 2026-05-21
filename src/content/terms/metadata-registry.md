---
title: "Metadata Registry"
description: "A centralized system containing definitions, lineage, and ownership details for enterprise data assets."
related: ["semantic-layer", "apache-polaris", "project-nessie"]
---

**Metadata Registry** is a centralized database catalog that stores administrative metadata, schema structures, business definitions, lineage relationships, and data ownership details. It serves as the directory for finding and auditing enterprise data assets.

## How it Works

A metadata registry gathers schema definitions, table statistics, and access rules from various data sources. When an enterprise dataset changes, the registry updates its internal logs, maintaining a record of table updates, descriptions, and structural transformations.

- **Unified Schema Directory**: Stores schema records and column types from different physical databases in a single index.
- **Data Lineage Tracking**: Tracks where data comes from and how it changes as it moves through pipelines.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, a metadata registry is essential to keep track of tables, views, and access rules across storage platforms. For AI agents, a metadata registry acts as a map of the data landscape. When given a natural language query, the agent queries the registry to locate the correct tables, columns, and metric definitions. Dremio integrates with open lakehouse metadata registries like Apache Polaris and Project Nessie, providing unified access control and transactional catalogs for analytical workflows.
