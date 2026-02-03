# Setup Guide

## Prerequisites

- Docker + Docker Compose
- LinkedIn Developer App (with required scopes)
- SMTP email provider (SendGrid, SES, Gmail, etc.)
- LLM API key (OpenAI / Anthropic / Azure)

## 1) Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

## 2) Start N8N

```bash
docker compose up -d
```

N8N should be available at `http://localhost:5678`.

## 3) Import the workflow

- Open N8N UI.
- Import `workflows/n8n-linkedin-post-automation.json`.

## 4) Configure credentials in N8N

- **LinkedIn OAuth**: create credentials and set client ID/secret.
- **SMTP**: configure an email credential for approval emails.
- **LLM Provider**: configure the OpenAI/Anthropic node.

## 5) Test

- Trigger the workflow manually.
- Approve from the email link.
- Confirm the post is published and logged.

## Optional: External DB

The workflow uses a simple in-memory data store by default. You can replace it with Postgres, Airtable, or Google Sheets for persistent storage.
