#!/bin/bash

echo "🧱 Current branch: $VERCEL_GIT_COMMIT_REF"
echo "🌍 Vercel env: $VERCEL_ENV"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == "staging" ]]; then
  echo "✅ - Building for branch: $VERCEL_GIT_COMMIT_REF"
  exit 1;

else
  echo "🛑 - Skipping build for branch: $VERCEL_GIT_COMMIT_REF"
  exit 0;
fi