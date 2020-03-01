import * as Values from "../data/values.json";
import * as fs from "fs";
import * as moment from "moment";

export const handler = async event => {
  try {
    //get posted values
    const postedValues = JSON.parse(event.body);

    //update data store
    Values.push({
      value: postedValues.value,
      time: moment().format("LLLL")
    });

    fs.writeFileSync("src/data/values.json", JSON.stringify(Values), "utf8");

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: 1,
        message: "Success"
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: 0,
        message: error
      })
    };
  }
};
