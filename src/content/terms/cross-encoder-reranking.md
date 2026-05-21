---
title: "Cross-Encoder Reranking"
description: "A second-stage retrieval step that scores the relevance of retrieved chunks using deep model attention."
related: ["hybrid-search", "dense-retrieval", "llm-context-window"]
---

**Cross-Encoder Reranking** is a two-stage information retrieval technique that evaluates the conceptual relevance of a query against candidate documents. It uses a deep learning model to process the query and document together, producing a highly accurate similarity score.

## How it Works

Standard retrieval systems use bi-encoders to search vectors independently for speed. Reranking applies a second, more powerful filter over a smaller subset of results.

- **Joint Input Encoding**: The cross-encoder model processes the user query and candidate document chunk simultaneously, allowing full self-attention across both texts.
- **Attention Scoring**: Evaluates the relationships between every token in the query and every token in the document, determining contextual relevance.
- **Filtering Stage**: Sorts the top candidates (e.g., the top 100) from the initial search, passing only the highest-scoring chunks to the LLM.

## Lakehouse & Agentic Relevance

In a data lakehouse, retrieval pipelines handle vast sets of technical and business documents. Autonomous agents need high-quality grounding data to prevent hallucinations, but feeding too many chunks into the LLM context window causes latency and cost. Cross-encoder reranking solves this by filtering search results down to the most relevant items. Dremio accelerates these pipelines by pre-filtering datasets and supplying structured, schema-compliant tables to the reranking pipelines, optimizing retrieval speed.
