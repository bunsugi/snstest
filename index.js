const { sns } = require("./utils"); // ロール設定忘れずに。

const index = async () => {

    const msg="てすとめっせーじ"
   
    await sns(msg);

};

module.exports.handler = index;

