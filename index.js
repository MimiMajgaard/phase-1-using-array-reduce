const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, batteries){
    return total += batteries;
}, 0);

console.log(batteryBatches)
