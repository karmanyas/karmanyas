#!/usr/bin/env node

const crypto = require("crypto");

const [secret, draftId, expiresAt] = process.argv.slice(2);

if (!secret || !draftId || !expiresAt) {
  console.error("Usage: node sign-approval-token.js <secret> <draftId> <expiresAt>");
  process.exit(1);
}

const payload = `${draftId}.${expiresAt}`;
const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex");
const token = Buffer.from(`${payload}.${signature}`).toString("base64url");

console.log(token);
