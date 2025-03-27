db = db.getSiblingDB("netflix");  // Use or create the database

db.videos.insertMany([
    { "title" : "My Sample Video", "filename" : "sample_video_1.mp4" },
    { "title" : "My Sample Video 2", "filename" : "sample_video_2.mp4" }
]);

print("✅ Initial data added to MongoDB!");
