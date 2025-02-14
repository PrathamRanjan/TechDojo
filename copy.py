import os
import shutil

# List of files containing 'Clerk'
files_to_copy = [
    "./src/actions/user-progress.ts",
    "./src/app/(marketing)/page.tsx",
    "./src/db/queries.ts",
    "./.next/static/chunks/app/(main)/layout.js",
    "./.next/static/chunks/app/layout.js",
    "./.next/static/chunks/app/(main)/learn/page.js",
    "./src/app/layout.tsx",
    "./src/app/(marketing)/_components/header.tsx",
    "./.next/server/app/(marketing)/page_client-reference-manifest.js",
    "./.next/server/app/(marketing)/page.js",
    "./.next/server/app/(main)/learn/page.js",
    "./.next/static/chunks/app/(marketing)/page.js",
    "./src/actions/user-subscription.ts",
    "./.next/server/src/middleware.js",
    "./src/actions/challenge-progress.ts",
    "./src/components/sidebar.tsx",
    "./.next/server/vendor-chunks/@clerk.js",
    "./.next/server/app/(main)/learn/page_client-reference-manifest.js",
    "./.next/static/chunks/app/(marketing)/layout.js",
    "./src/middleware.ts",
]

# Destination folder (Downloads)
downloads_folder = os.path.expanduser("~/Downloads/clerk_files_backup")

# Ensure the destination folder exists
os.makedirs(downloads_folder, exist_ok=True)

# Copy files
for file_path in files_to_copy:
    if os.path.exists(file_path):
        shutil.copy(file_path, downloads_folder)
        print(f"✅ Copied: {file_path}")
    else:
        print(f"⚠️ File not found: {file_path}")

print("\n📂 All files copied to:", downloads_folder)
