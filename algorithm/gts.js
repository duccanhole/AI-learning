const maxValue = 999;
// problem: Traveling Saleman Problem-TSP
// document reference: https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/]
// https://drive.google.com/file/d/1e4fCOWRzmgYvIhFtCJqJ22ZIQQHs7hnF/view?fbclid=IwAR19-C8ToaaINonkRYupMWClgKRkIj1LuIu9EhsoEPFdEfto_u7LzKJYcI0
const costArray = [
    [maxValue, 20, 42, 31, 6, 24],
    [10, maxValue, 17, 6, 35, 18],
    [25, 5, maxValue, 27, 14, 9],
    [12, 9, 24, maxValue, 30, 12],
    [14, 7, 21, 15, maxValue, 38],
    [40, 15, 16, 5, 20, maxValue]
];

function gst1(mazeCost, start) {
    const res = {
        gst: [start + 1],
        cost: 0
    }
    const length = mazeCost.length;
    if (start > length - 1) return;
    const map = new Map();
    let tmp = start;
    while (res.gst.length <= length) {
        map.set(tmp.toString(), true);
        let minPoint = 0;
        let minCost = maxValue;
        for (let i = 0; i < mazeCost[tmp].length; i++) {
            if (mazeCost[tmp][i] < minCost && !map.has(i.toString())) {
                minPoint = i;
                minCost = mazeCost[tmp][i];
            }
        }
        if(minCost === maxValue) {
            minPoint = start;
            minCost = mazeCost[tmp][start];
        }
        console.log(minPoint + 1, minCost);
        res.cost += minCost;
        res.gst.push(minPoint + 1);
        tmp = minPoint;
    }
    return res;
}
console.log(gst1(costArray, 4));