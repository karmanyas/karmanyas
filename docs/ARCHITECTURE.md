# Architecture

## Overview

This project implements a **Create → Approve → Schedule → Publish** pipeline for LinkedIn posts using N8N and a GenAI content generator.

## Components

1. **N8N** – Orchestrates the workflow and handles triggers, approvals, and posting.
2. **LLM Provider** – Generates post drafts from topics and brand guidelines.
3. **Email Service** – Sends approval emails containing signed approve/reject links.
4. **Database** – Stores drafts, approvals, and final post metadata.
5. **LinkedIn API** – Publishes approved posts.

## Data flow (high level)

1. Scheduler triggers content generation.
2. LLM creates a draft and stores it with metadata.
3. Approval email sent to reviewers.
4. Reviewer approves/rejects via webhook link.
5. If approved, the post is scheduled or published immediately.
6. Success/failure is logged and notifications are sent.

## Trust & security

- Approval links use **signed tokens** or short-lived JWTs.
- Post publication is gated by approval status in the database.
- Audit logging records who approved and when.
