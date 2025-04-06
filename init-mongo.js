db = db.getSiblingDB("vs");

db.videos.insertMany([
    { "title": "My Sample Video", "filename": "sample_video_1.mp4", "description": "This is sample video 1" },
    { "title": "My Sample Video 2", "filename": "sample_video_2.mp4", "description": "This is sample video 2" },
    { "title": "ABC", "filename": "979689-hd_1920_1080_30fps.mp4" }
]);

print("✅ Initial data added to MongoDB!");
