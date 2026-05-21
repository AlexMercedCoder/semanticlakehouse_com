---
title: "Semantic Reconciliation"
description: "The process of mapping and unifying conflicting data definitions across systems to a single semantic standard."
related: ["semantic-layer", "metadata-registry", "data-semantics"]
---

**Semantic Reconciliation** is the process of identifying, mapping, and unifying conflicting data definitions, columns, and metric calculations across disparate source systems to build a single, standardized semantic definition.

## How it Works

Semantic reconciliation unifies conflicting data layouts. Data architects analyze how different databases define identical business events, then implement transformations, name overrides, and unit conversions within the logical layer to map them to a uniform standard.

- **Conflict Mapping**: Resolves schema differences (like mapping `cust_id` in one system and `client_num` in another to a single customer ID).
- **Metric Standardization**: Aligning formulas (such as ensuring active customer rules match across different divisions).

## Lakehouse & Agentic Relevance

In a data lakehouse that aggregates files from multiple corporate departments, semantic reconciliation is necessary to prevent analytical silos and data confusion. For AI agents, reconciled data is crucial for accuracy. Without semantic reconciliation, agents generate queries that return inconsistent answers depending on which source table is selected. Dremio facilitates this process by allowing developers to build unified virtual datasets that consolidate and clean distinct physical sources.
