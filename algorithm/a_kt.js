// problem: tower of hanoi
// https://drive.google.com/file/d/1e4fCOWRzmgYvIhFtCJqJ22ZIQQHs7hnF/view?fbclid=IwAR19-C8ToaaINonkRYupMWClgKRkIj1LuIu9EhsoEPFdEfto_u7LzKJYcI0
// document reference: https://www.digitalocean.com/community/tutorials/tower-of-hanoi

// n: number of disk
// t1: tower source
// t2: tower helper
// t3: tower target
// use recursion
function towerOfHanoi1(n, source = 'A', helper = 'B', target = 'C') {
    if (n === 1) {
        // move the last disk from source to target
        console.log(`move disk ${n} from ${source} to ${target}`);
        return;
    }
    // move n-1 disk on the top from source to helper
    towerOfHanoi1(n - 1, source, target, helper);
    console.log(`move disk ${n} from ${source} to ${target}`);
    // move n-1 disk from helper to target
    towerOfHanoi1(n - 1, helper, source, target);
}

towerOfHanoi1(4);