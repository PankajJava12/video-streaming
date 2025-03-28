db = db.getSiblingDB("netflix");

db.videos.insertMany([
    { "title" : "My Sample Video", "filename" : "sample_video_1.mp4", "description": "This is sample video 1" },
    { "title" : "My Sample Video 2", "filename" : "sample_video_2.mp4", "description": "This is sample video 2" }
]);

print("✅ Initial data added to MongoDB!");
