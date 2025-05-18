// The Car Won't Start

let liveNearby = prompt("Do you live nearby? (yes/no)").toLowerCase() === "yes";
let wantWalk = prompt("Do you feel like walking? (yes/no)").toLowerCase() === "yes";

if (liveNearby && wantWalk) {
  alert("You go on foot and you'll fix it tomorrow");
} else {
  let hasGasoline = prompt("Does the car have gasoline? (yes/no)").toLowerCase() === "yes";

  if (!hasGasoline) {
    let haveMoney = prompt("Do you have money for gasoline? (yes/no)").toLowerCase() === "yes";

    if (hasGasoline) {
      alert("You put gasoline");
    } else {
      alert("You go on underground");
    }
  } else {
    let hasBattery = prompt("Does the car have a battery? (yes/no)").toLowerCase() === "yes";

    if (!hasBattery) {
      alert("Charge the battery");
    } else {
      alert("Stop by the mechanic");
    }
  }
}