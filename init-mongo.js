db = db.getSiblingDB("netflix");  // Use or create the database

db.videos.insertMany([
    { "title" : "file_example_MP4_640_3MG", "filename" : "file_example_MP4_640_3MG.mp4" },
    { "title" : "file_example_MP4_640_3MG_copy", "filename" : "file_example_MP4_640_3MG_copy.mp4" }
]);

print("✅ Initial data added to MongoDB!");
