
const { AddRequest, AddResponse } = require("./calculator_pb")
const { CalculatorClient } = require("./calculator_grpc_web_pb")
var client = new CalculatorClient('http://localhost:50551');

var request = new AddRequest()

request.setNum1(2)
request.setNum2(3)

client.add(request, {}, (err, response) => {
    console.log("Result of Add : ",response.getResult())
})

