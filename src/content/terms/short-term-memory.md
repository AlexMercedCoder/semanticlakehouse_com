---
title: "Short-Term Memory"
description: "Transient context stored during a single conversation thread to maintain dialogue state."
related: ["long-term-memory", "llm-context-window", "context-layer"]
---

**Short-Term Memory** is the transient context stored during a single conversation session that allows an AI system to maintain dialogue state. It ensures that the model can reference previous inputs and outputs within the active discussion.

## How it Works

Short-term memory tracks conversation flow by preserving a sliding window of recent messages.

- **Conversation Buffering**: Appends the history of recent user prompts and model responses to the active context window for each new inference cycle.
- **Context Summarization**: Compresses older parts of the conversation into high-level summaries when the dialogue length approaches context limits.
- **State Management**: Uses unique session identifiers to route and isolate conversation histories, preventing cross-talk between users.

## Lakehouse & Agentic Relevance

In data lakehouse analytics, users interact with databases through conversational interfaces. Short-term memory allows an agent to understand follow-up commands (e.g., "now filter that by Region X" referring to the previously generated chart). Without it, users would have to restate their entire query. Dremio supports these conversational workflows by executing query iterations quickly. Dremio returns results to the agent at low latency, allowing the orchestrator to update the agent's short-term memory state instantly.
