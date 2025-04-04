import redis from "redis";

let redisClient;
let isRedisConnected = false;

async function connectRedis() {
    try {
        redisClient = redis.createClient({
            socket: {
                host: "localhost",
                port: 6379
            }
        });

        redisClient.on("error", (err) => {
            console.error("Redis Error:", err);
            isRedisConnected = false;
        });

        redisClient.on("connect", () => {
            console.log("✅ Connected to Redis!");
            isRedisConnected = true;
        });

        await redisClient.connect().catch(() => {
            console.log("⚠️ Redis not installed or not running. Caching disabled.");
            isRedisConnected = false;
        });
    } catch (err) {
        console.log("⚠️ Redis is not available. Caching is disabled.");
        isRedisConnected = false;
    }
}

connectRedis();

export { redisClient, isRedisConnected };