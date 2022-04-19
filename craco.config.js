const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@enums": path.resolve(__dirname, "./src/enums"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@configs": path.resolve(__dirname, "./src/Configs"),
            "@layouts": path.resolve(__dirname, "./src/layout"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@redux": path.resolve(__dirname, "./src/redux"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@hocs": path.resolve(__dirname, "./src/hocs"),
            "@pages": path.resolve(__dirname, "./src/pages"),
        },
    },
};
