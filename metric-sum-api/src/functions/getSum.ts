import * as Values from "../data/values.json";
import * as moment from "moment";

export const handler = async () => {
  try {
    //filter out older values
    const lastHourValues = Values.filter(v => {
      const now = moment();
      const timePosted = moment(new Date(v.time));

      const duration = moment.duration(now.diff(timePosted));
      const hours = duration.asHours();

      if (hours <= 1) return v;
    });

    //sum the last hour values
    const sum_metric = Math.floor(
      lastHourValues.reduce((a, b) => a + b.value, 0)
    );

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ value: sum_metric })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: error
      })
    };
  }
};
