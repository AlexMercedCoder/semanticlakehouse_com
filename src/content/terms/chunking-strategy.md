---
title: "Chunking Strategy"
description: "The method of splitting large text documents into smaller segments for embedding and retrieval."
related: ["semantic-chunking", "retrieval-augmented-generation", "llm-context-window"]
---

**Chunking Strategy** is the methodological approach used to break down continuous text documents into smaller, discrete segments. This process is necessary to format raw text data for semantic vector generation and ensure it fits within LLM context constraints.

## How it Works

A chunking strategy determines how documents are parsed before being passed to an embedding model.

- **Fixed-Size Chunking**: Splits text into a set number of characters or tokens, regardless of formatting or syntax boundaries.
- **Overlapping Segments**: Retains a small portion of the preceding segment at the start of each new segment, preserving context across partition boundaries.
- **Recursive Chunking**: Analyzes document structure (using separators like paragraph breaks, punctuation, or spaces) to divide text while maintaining grammatical coherence.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, raw manuals, audit logs, and catalog documentation are stored in object storage. When building an agentic analytics platform, these documents must be chunked and indexed so that retrieval systems do not overwhelm the LLM's context window. An optimized chunking strategy ensures that an autonomous agent receives highly specific documentation segments, rather than entire massive files. Using Dremio to organize, clean, and pre-aggregate raw text source tables helps data pipelines apply consistent chunking rules before embedding creation.
