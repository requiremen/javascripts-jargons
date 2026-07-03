let main = [-4, -1, 0, 3, 10];
let a = [];
let b = [];
let point1 = 0;
let point2 = 0;
let newarr = [];


for (let i = 0; i < main.length; i++) {
    if (main[i] < 0) {
        a.push(main[i] * main[i]);
    } else {
        b.push(main[i] * main[i]);
    }
}

a.reverse();

// Merge
while (point1 < a.length && point2 < b.length) {
    if (a[point1] < b[point2]) {
        newarr.push(a[point1]);
        point1++;
    } else {
        newarr.push(b[point2]);
        point2++;
    }
}

// Add remaining elements
while (point1 < a.length) {
    newarr.push(a[point1]);
    point1++;
}

while (point2 < b.length) {
    newarr.push(b[point2]);
    point2++;
}

console.log(newarr);
