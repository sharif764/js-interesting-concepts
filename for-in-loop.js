const bottle = { color: 'yellow', hole: 'water', price: 50, isCleanned: true };
for (const prop in bottle) {
    console.log(bottle[prop]);
}

const keys = Object