---
title: "ReAct Pattern"
description: "A framework enabling LLMs to alternate between reasoning (thought) and acting (executing tools)."
related: ["ai-agent", "llm-orchestration", "tool-call"]
---

**ReAct Pattern** (Reasoning and Acting) is an agent execution framework that combines reasoning prompts with action steps. It enables large language models to alternate between generating thoughts (planning, analyzing) and executing actions (calling APIs, querying databases).

## How it Works

The ReAct pattern uses structured prompting cycles to guide model behavior step-by-step.

- **Thought Generation**: The model analyzes user intent and outputs its logical reasoning, detailing what information is missing and how to retrieve it.
- **Action Selection**: The model outputs a formal request to call an external tool (e.g., executing a SQL query or searching a vector database).
- **Observation Integration**: The software runner executes the tool, feeds the raw output (observation) back to the model, and prompts the model to generate the next thought.

## Lakehouse & Agentic Relevance

In a data lakehouse, analytical queries require precise execution. Using the ReAct pattern, an AI agent can reason about a schema, execute test queries, evaluate the returned results, and refine its SQL if errors occur. This reduces incorrect outputs. Dremio acts as a key tool in this loop. Because Dremio virtualizes multiple sources under a single SQL dialect, the agent can call Dremio to execute queries, check observations, and refine its plan.
