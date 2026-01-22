const nodemailer = require("nodemailer");

/* ============================
   TRANSPORTER SETUP
============================ */

const TransportInfo = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jangajoseph77@gmail.com",
        pass: "dbdg yynp mzhg iqwl"
    }
});

/* ============================
   SEND MAIL CONTROLLER
============================ */

const SendMail = async (req, res) => {
    try {
        const result = await TransportInfo.sendMail({
            from: "jangajoseph77@gmail.com",
            to: "jangajoseph74@gmail.com",
            subject: "testing-subject",
            text: "kf lkasjd flaksjd flaksjfh lkasj fhlaksjd falskj lasdk",
            html: "<h2>Hello 👋</h2><p>This is a test email</p>",
            attachments: [
                {
                    filename: "image1.JPG",
                    path: "http://localhost:9000/image1.JPG"
                }
            ]
        });

        console.log(result);

        return res.status(200).json({
            success: true,
            message: "Mail sent successfully",
            info: result
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

module.exports = {
    SendMail
};   
