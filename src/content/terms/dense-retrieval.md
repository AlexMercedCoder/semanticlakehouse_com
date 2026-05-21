---
title: "Dense Retrieval"
description: "Retrieving documents by measuring distance between continuous vector embeddings."
related: ["sparse-retrieval", "vector-embeddings", "vector-database"]
---

**Dense Retrieval** is an information retrieval framework that represents queries and documents as continuous, low-dimensional vector embeddings, matching them based on semantic distance. This method bypasses exact word matches to retrieve content based on conceptual meaning.

## How it Works

Dense retrieval translates inputs into numerical arrays using bi-encoder neural networks, where one network encodes the query and another encodes the documents.

- **Embedding Alignment**: The query vector and document vectors are positioned in a shared high-dimensional vector space.
- **Vector Search**: Calculates the similarity score between vectors using distance metrics like cosine similarity or inner product.
- **Approximate Nearest Neighbors (ANN)**: Uses specialized indexing structures to find the closest document vectors in sub-linear search time.

## Lakehouse & Agentic Relevance

In a data lakehouse, dense retrieval is the foundation for semantic search over unstructured catalogs, wiki pages, and raw text files. Autonomous agents rely on dense retrieval to fetch contextually relevant paragraphs when resolving user queries. Dremio integrates with these semantic pipelines by providing unified datasets that act as the source of truth for raw text. Data pipelines extract this data from Dremio and generate the vector embeddings stored in lakehouse tables, enabling dense retrieval search workflows.
