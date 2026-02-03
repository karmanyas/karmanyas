# Workflow Details

## Data schema (example)

```json
{
  "draft_id": "uuid",
  "topic": "string",
  "post_text": "string",
  "status": "draft|approved|rejected|published",
  "created_at": "timestamp",
  "approved_at": "timestamp",
  "approved_by": "email",
  "publish_at": "timestamp",
  "linkedin_post_id": "string"
}
```

## Node-by-node breakdown

1. **Schedule Trigger**
   - Runs daily/weekly or manually.
2. **Set/Function**
   - Defines topic, tone, and target audience.
3. **LLM Node**
   - Generates a draft post.
4. **Store Draft**
   - Writes the post and metadata to a database.
5. **Send Approval Email**
   - Sends approval email with approve/reject links.
6. **Webhook (Approve/Reject)**
   - Receives the approval action.
7. **IF Node**
   - Branches based on approval.
8. **Publish to LinkedIn**
   - HTTP Request or LinkedIn node.
9. **Log + Notify**
   - Writes final status and notifies team.

## Scheduling options

- **Immediate publish** on approval.
- **Scheduled publish** using `publish_at` and a secondary workflow.

## LinkedIn API notes

- Requires a LinkedIn App with `w_member_social` scope.
- Some accounts need additional permission review.
