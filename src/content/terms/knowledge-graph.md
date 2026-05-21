---
title: "Knowledge Graph"
description: "A network of real-world entities and their semantic relationships stored as nodes and edges."
related: ["semantic-graph", "graph-database", "entity-resolution"]
---

**Knowledge Graph** is a structured representation of real-world entities and their semantic relationships, organized as a network of nodes (objects, concepts, or events) and edges (the logical connections or relationships between them).

## How it Works

Knowledge graphs represent data using triplets consisting of a subject, a predicate, and an object (e.g., "Customer A" -> "purchased" -> "Product B"). This structures information in a graph database, allowing query engines to trace long paths of indirect connections.

- **Nodes and Edges**: Nodes act as data objects or categories, while edges define the semantic relationships between them.
- **Graph Queries**: Uses specialized languages (like Cypher or SPARQL) to navigate networks of data elements without join statements.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, knowledge graphs can be built over relational tables using virtualized schemas to show how database entities relate to one another. For AI agents, a knowledge graph is an invaluable asset for context mapping. The agent queries the graph to understand how business metrics and tables are connected, enabling it to answer complex relational questions. Dremio supports graph querying by exposing unified relational views of raw data sources, making it easy to construct graphs.
