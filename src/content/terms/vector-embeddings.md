---
title: "Vector Embeddings"
description: "Numerical representations of text or data capturing semantic meaning in a high-dimensional space."
related: ["vector-database", "embedding-model", "semantic-chunking"]
---

**Vector Embeddings** are dense numerical representations of words, documents, or data elements that capture their semantic meaning in a high-dimensional vector space. These arrays of numbers represent the conceptual relationships between distinct terms.

## How it Works

An embedding model processes raw text and outputs an array of real numbers representing its position in vector space. Words or sentences with similar meanings are positioned close to each other, allowing algorithms to measure semantic similarity using metric operations.

- **High-Dimensional Mapping**: Translates unstructured sentences into vectors of hundreds or thousands of dimensions.
- **Distance Calculations**: Measures conceptual similarity using distance algorithms (such as cosine similarity or Euclidean distance).

## Lakehouse & Agentic Relevance

In a data lakehouse, vector embeddings are generated for unstructured document files and stored alongside structured metadata in formats like Apache Iceberg. For agentic analytics, vector embeddings enable semantic query routing. Agents match the user's natural language input against these embeddings to locate relevant documents or schemas. Dremio virtualizes relational and vector sources, providing a single query gateway that connects analytical tables to vector stores to support hybrid AI applications.
