# N8N LinkedIn Post Automation Project

This repository contains a complete, ready-to-extend project for generating GenAI-driven LinkedIn posts, sending an approval email, scheduling publication, and posting to LinkedIn via N8N.

## What’s included

- **N8N workflow template** you can import and customize.
- **Docker Compose** for running N8N with Postgres.
- **Approval email template** with approve/reject links.
- **Sample scripts** to generate signed approval tokens.
- **Docs** for architecture, setup, and workflow behavior.

## Quick start

1. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```

2. **Start N8N with Postgres**
   ```bash
   docker compose up -d
   ```

3. **Import the workflow**
   - Open N8N at `http://localhost:5678`.
   - Import `workflows/n8n-linkedin-post-automation.json`.

4. **Configure credentials**
   - Add OpenAI/Anthropic credentials for the LLM node.
   - Add LinkedIn OAuth credentials for publishing.
   - Configure SMTP for outbound approval emails.

5. **Run a test**
   - Trigger the workflow manually or use the schedule trigger.

## Key files

- `docs/ARCHITECTURE.md` – System components and flow.
- `docs/SETUP.md` – Step-by-step deployment notes.
- `docs/WORKFLOW.md` – Workflow node explanation and data schema.
- `workflows/n8n-linkedin-post-automation.json` – Importable N8N workflow.
- `templates/approval_email.html` – Approval email template.
- `scripts/sign-approval-token.js` – Token helper for approval links.

## Notes

- The LinkedIn API requires an approved developer app and scopes for posting.
- You should keep approvals auditable and store all status changes in a database.

---

If you want, I can tailor the workflow for your existing CRM or add multi-channel posting (X, Facebook, Instagram).
