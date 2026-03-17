exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            success: true,
            message: "Request successful",
            data: {
                id: 1,
                name: "Sample Data",
                timestamp: new Date().toISOString(),
            },
        }),
    };
};