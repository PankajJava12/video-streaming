import { redisClient, isRedisConnected } from "./cache.js";

export const cacheMiddleware = async (req, res, next) => {
    if (!isRedisConnected) {
        console.log("⚠️ Redis not available. Skipping cache.");
        return next();
    }
    
    const key = req.originalUrl;
    const cachedData = await redisClient.get(key);

    if (cachedData) {
        console.log("Cache Hit ✅");
        return res.json(JSON.parse(cachedData));
    }

    console.log("Cache Miss ❌, will set data in cache now...");

    next();
};