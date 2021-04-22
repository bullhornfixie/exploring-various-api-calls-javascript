const pipeline = require('../public/swell-data/pipeline_616_forecast.json');
console.log("data extracted")

const maxBreakingHeight = pipeline.filter(item => item.swell.maxBreakingHeight === 1)
console.log(maxBreakingHeight)

function windSpeed() {
  const force5 = pipeline.filter(item => item.wind.speed > 22 && item.wind.compassDirection === 'E')
  console.log(force5.length)
}

windSpeed()

