---
title: "Data Hierarchy"
description: "An ordered set of parent and child fields, such as Year to Day or Country to Postal Code, that defines drill-down and roll-up paths in a semantic layer."
related: ["semantic-layer", "dimension-table"]
---

**Data Hierarchy** is a structured, nested relationship among attributes within a data model, organizing fields from the broadest level to the most granular details. It defines paths for drill-down and roll-up analysis (such as Year down to Day, or Country down to Postal Code).

## How it Works

A data hierarchy is defined within the metadata schema of a semantic layer. When a user requests a drill-down operation, the analytical engine uses the defined logical paths to group data at the next nested level without requiring a new query structure.

- **Parent-Child Mapping**: Links broader attributes (parents) to more detailed attributes (children) in a strict structural order.
- **Aggregation Paths**: Tells the query processor how to summarize data levels sequentially.

## Lakehouse & Agentic Relevance

In a data lakehouse, data hierarchies are implemented in the semantic layer to simplify navigation over flat files. For AI agents, explicit data hierarchies clarify how dimensions relate to each other, allowing them to formulate logical drill-down requests in natural language interfaces. Rather than guessing the relationship between City and State, the agent references the hierarchy. Dremio virtual datasets support structuring hierarchies natively, providing clean endpoints for BI tools and AI orchestrators.
