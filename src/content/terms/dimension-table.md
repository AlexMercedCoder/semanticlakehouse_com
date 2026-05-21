---
title: "Dimension Table"
description: "A table containing descriptive attributes used to filter, group, and label quantitative measurements."
related: ["fact-table", "star-schema", "slowly-changing-dimension"]
---

**Dimension Table** is a relational database table that stores descriptive context or attributes about business events. It contains textual or qualitative fields (such as customer details, product categories, or store locations) used to filter, slice, and partition metric measurements.

## How it Works

Dimension tables are joined to fact tables using primary key to foreign key relationships. When a query is executed, the engine uses the attributes within the dimension table to group, filter, and organize the numerical calculations stored in the fact table.

- **Descriptive Columns**: Contains high-cardinality fields like customer names or geographic regions that provide analytical context.
- **Surrogate Keys**: Employs unique identifiers to link historical dimension records to factual transactions efficiently.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, dimension tables are frequently stored as Apache Iceberg tables to take advantage of schema evolution and file pruning. For AI agents, dimension tables represent the structural options available for query filtering. Properly documented dimension schemas tell the agent how to structure WHERE and GROUP BY clauses during conversational analysis. Dremio accelerates dimension table queries by leveraging columnar memory formatting, enabling rapid joins across large fact tables on object storage.
