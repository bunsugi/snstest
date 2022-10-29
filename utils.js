const REGION = "ap-northeast-1" //e.g. "us-east-1"
const { SNSClient, PublishCommand  } = require("@aws-sdk/client-sns") // npm install @aws-sdk/client-sns が必要

module.exports.sns = async (msg) => {
  
  const client = new SNSClient({ region: REGION })

  const params = {
    Message: msg /* required */,
    TopicArn: "arn:aws:sns:ap-northeast-1:299413808364:ay-s-topic-test2",
  }
  const command = new PublishCommand(params)

  try {
    const data = await client.send(command)
    // process data.
    console.log(data)
  } catch (error) {
    // error handling.
    console.log(`error: ${error}`)
  } finally {
    // finally.
  }
}



// Lambdaタイムアウトの設定を変える。
// エラー
// 2022-05-24T02:26:07.159Z a41cb1d6-6789-4eb4-a7ef-396aec805f78 Task timed out after 3.05 seconds
