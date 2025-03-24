function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a t-shirt");
    } else {
        console.log("Wear a sweater");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);