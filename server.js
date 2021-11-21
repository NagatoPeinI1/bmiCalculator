const app = require("express")();
const fs = require("fs");

app.use(express.json());

app.post("/postBGMI", (req, res) => {
  let finalData = [];
  const clients = req.body;
  clients.forEach((client) => {
    let ishealthy, bmiCategory, bmiValue = (10000 * client.WeightKg) / (client.HeightCm * client.HeightCm);
    if (bmiValue <= 18.4) {
      bmiCategory = "Underweight";
      ishealthy = "Malnutrition risk";
    } else if (18.5 < bmiValue && bmiValue <= 24.9) {
      bmiCategory = "Normal";
      ishealthy = "Low risk";
    } else if (25 < bmiValue && bmiValue <= 29.9) {
      bmiCategory = "Overweight";
      ishealthy = "Enhanced risk";
    } else if (30 < bmiValue && bmiValue <= 34.9) {
      bmiCategory = "Moderately obese";
      ishealthy = "Medium risk";
    } else if (35 < bmiValue && bmiValue <= 39.9) {
      bmiCategory = "Severely obese";
      ishealthy = "High risk";
    } else if (bmiValue >= 40) {
      bmiCategory = "Very severely obese";
      ishealthy = "Very High Risk";
    }
    finalData.push({ ...client, bmiValue, bmiCategory, ishealthy });
  });

  fs.writeFileSync("resultData.json", JSON.stringify(finalData, null, 2));

  const listofOverweightClients = finalData.filter((weightData) => {
    if ([
        "Overweight",
        "Moderately obese",
        "Severely obese",
        "Very severely obese"
      ].includes(weightData.bmiCategory)
    ) {
      return weightData;
    }
  });
  console.log(`Count of over weight person ${listofOverweightClients.length}`);
  res.status(200).send(`Total count of over weight persons: ${JSON.stringify(listofOverweightClients.length)}`);
});

app.listen(3000, () => console.log("Ready for the BMI Calculation"));

module.exports = app;
