//массив towers, который представляет три башни
let towers = [{ discs: [3, 2, 1] }, { discs: [] }, { discs: [] }];

// счетчик дисков в башнях
let discCount = towers[0].discs.length;

// выводит текущее состояние башен в консоль
function printTowers() {
    //   items содержит строки, представляющие диски в каждой башне, отсортированные в обратном порядке
    let items = towers.map((t) => t.discs.slice().reverse().join(""));
    //   табуляция, чтобы в консоли визуально разделить башни
    console.log(items.join("\t \t"));
}

// алгоритм для четных 1-2, 1-3, 2-3
// алгоритм для нечетных 1-3, 1-2, 2-3

let actions =
    discCount % 2 === 0
        ? [
                { i: 0, j: 1 },
                { i: 0, j: 2 },
                { i: 1, j: 2 },
        ]
        : [
                { i: 0, j: 2 },
                { i: 0, j: 1 },
                { i: 1, j: 2 },
        ];

// actionIndex нужен для выбора следующего действия из массива
let actionIndex = 0;
let moveCount = 0;
printTowers();

// выполняется до тех пор, пока в третьей башне не будет содержаться столько же дисков, сколько в первой башне изначально
while (towers[2].discs.length < discCount) {
    let { i, j } = actions[actionIndex++ % actions.length];
    let sourceTower = towers[i];
    let targetTower = towers[j];

    // если исходная башня содержит хотя бы один диск, и либо целевая башня пуста, либо верхний диск на целевой башне больше, чем на исходной.
    if (
        sourceTower.discs.length > 0 &&
        (targetTower.discs.length === 0 ||
            targetTower.discs[targetTower.discs.length - 1] >
                sourceTower.discs[sourceTower.discs.length - 1])
    ) {
        // ксли true перемещаем верхний диск с исходной башни на целевую башню
        targetTower.discs.push(sourceTower.discs.pop());
    } else {
        // если false то перемещаем верхний диск с целевой башни на исходную башню обратно, т е согласно алгоритму.
        sourceTower.discs.push(targetTower.discs.pop());
    }
    moveCount++;
    printTowers();
}
console.log("Количество ходов: " + moveCount);

//  способ 2

function hanoi(n, A, C, B) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) console.log(A + C);
    else {
        hanoi(n - 1, A, B, C);
        console.log(A + C);
        hanoi(n - 1, B, C, A);
    }
}

//  способ 3 
function Hanoi(n) {
    let source = "A";
    let target = "C";
    let auxiliary = "B";

    let moves = [];

    moves.push({ n: n, source: source, target: target, auxiliary: auxiliary });

    while (moves.length > 0) {
        let move = moves.pop();
        if (move.n == 1) {
            console.log(move.source + move.target);
        } else {
            moves.push({
                n: move.n - 1,
                source: move.auxiliary,
                target: move.target,
                auxiliary: move.source,
            });
            moves.push({
                n: 1,
                source: move.source,
                target: move.target,
                auxiliary: move.auxiliary,
            });
            moves.push({
                n: move.n - 1,
                source: move.source,
                target: move.auxiliary,
                auxiliary: move.target,
            });
        }
    }
}