---
title: "Metadata Enrichment"
description: "Adding descriptive tags, classifications, or semantic relationships to raw data."
related: ["metadata-registry", "semantic-modeling", "context-layer"]
---

**Metadata Enrichment** is the process of appending business context, classifications, tags, and semantic relationships to raw data assets. It turns undocumented technical objects into self-describing assets that are readily discoverable and usable.

## How it Works

Metadata enrichment involves evaluating datasets and applying annotations through manual mapping, automated heuristics, or machine learning classification.

- **Semantic Annotation**: Attaches business-friendly definitions and metrics definitions to technical table columns.
- **Lineage Mapping**: Documents data flow and dependencies, recording how a physical source table transforms into a virtual dataset.
- **Security & Compliance Tagging**: Identifies and labels sensitive fields (such as PII or financial data) to automatically enforce access control policies.

## Lakehouse & Agentic Relevance

In a data lakehouse, thousands of tables can be stored in open table formats like Apache Iceberg. Without enrichment, these tables are difficult for users and AI systems to locate and understand. Enriching catalog systems (like Apache Polaris or Nessie) ensures that autonomous agents have the necessary context to navigate the schema. Dremio leverages enriched metadata to present logical views to users and agents. Dremio's native wiki features and tags allow teams to enrich physical and virtual datasets directly, ensuring AI agents run queries against the correct source tables.
