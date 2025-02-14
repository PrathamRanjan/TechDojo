import os

# Define the search term
search_term = "clerk"

# Define file extensions to scan (JS/TS-based files)
file_extensions = {".js", ".ts", ".tsx", ".jsx", ".json", ".mjs"}

# Set to store file paths (avoids duplicates)
found_files = set()

# Function to search for "clerk" in project files
def find_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if any(file.endswith(ext) for ext in file_extensions):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read().lower()
                        if search_term in content:
                            found_files.add(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

# Run the search
directory_to_search = "."  # Root directory (current folder)
find_files(directory_to_search)

# Print results
if found_files:
    print("\n🔍 Files containing 'Clerk':\n")
    for file_path in found_files:
        print(file_path)
else:
    print("✅ No references to 'Clerk' found in the project.")
