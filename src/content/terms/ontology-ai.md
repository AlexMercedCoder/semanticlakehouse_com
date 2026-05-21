---
title: "Ontology (AI)"
description: "A formal representation of concepts, classes, and properties used to structure AI context."
related: ["knowledge-graph", "semantic-graph", "context-layer"]
---

**Ontology (AI)** is a formal, structural framework used to represent domain knowledge by defining classes of entities, their attributes, and their permissible relationships. In artificial intelligence systems, it provides the schema that allows models to reason about data conceptually.

## How it Works

An ontology defines the semantic rules of a business domain, structuring raw text or relational databases into machine-readable concepts.

- **Class Hierarchy**: Establishes parent-child relationships between entities (e.g., a "Customer" is a subclass of "Person").
- **Properties and Constraints**: Defines the attributes nodes can have and the types of connections allowed between classes (e.g., "Company" can "employ" "Person").
- **Logical Rules**: Enables inference engines to derive new, implicit facts from existing data points based on defined constraints.

## Lakehouse & Agentic Relevance

In a data lakehouse, data is stored across disjointed schemas. An AI ontology acts as the logical mapping layer that translates these raw tables into a semantic business model. Autonomous agents query the ontology to understand what tables represent, how metrics are defined, and what filters can be applied to generate SQL. Dremio supports this structure by exposing semantic virtual datasets, allowing developers to align data formats with the AI's ontological rules.
