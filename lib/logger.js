var emailSender = require("./emailSender");

var Logger = {
    logEvent: function (text) {
        emailSender.sendMail(text);
    }
};

module.exports = Logger;