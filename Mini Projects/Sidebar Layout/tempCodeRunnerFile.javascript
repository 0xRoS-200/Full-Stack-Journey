function Robot(name, batteryLevel) {
    this.name = name;
    this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function() {
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};

// Example usage:
const robo = new Robot("RoboX", 50);
console.log(robo.batteryLevel); // 50
robo.charge();
console.log(robo.batteryLevel); // 70
