function getAppInfo() {
    return {
        name: "SWYNEX Git Workflow Project",
        version: "1.0.0",
        status: "Running"
    };
}

function healthCheck() {
    return {
        status: "Healthy",
        message: "Application is working correctly"
    };
}

console.log("Application Information:");
console.log(getAppInfo());

console.log("\nHealth Check:");
console.log(healthCheck());