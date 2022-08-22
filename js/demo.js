var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var beginDom = document.getElementsByClassName('beginBtn')[0];
var overDom = document.getElementById('over');
var restartDom = document.getElementById('restart');
var randomsA= parseInt(Math.random() * 7); // arr1(方块的7种形状)
var randomsB = parseInt(Math.random() * 4); // arr1(方块随机形状对应的方向)
var firstX = 7, firstY = 0;
var upRan = randomsB;
var flag = true;
var fladown = true;
var arrflag = false;
/**
 * 绘制图形
 * @param x
 * @param y
 * @param w
 * @param h
 * @param color
 */
function fillHandle (x,y,w,h,color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.shadowBlur = 1;
    ctx.shadowColor = "#fff";
    ctx.fillRect(x,y,w,h);
}
// 格子15 * 25
var arr = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
var arr1 = [
    [
        [
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0]
        ],
        [
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0]
        ],
        [
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [1,1,0,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,0,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,0,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,0,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [1,1,0,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,0,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,1,1,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,1,0],
            [1,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [1,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,1,0],
            [1,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,0,0,0],
            [1,1,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,1,0],
            [1,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [1,1,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,1,0],
            [0,0,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [0,1,0,0],
            [1,1,0,0],
            [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [1,0,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ],
        [
            [1,1,1,0],
            [0,1,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ]
];
// 方块格子对应的真实坐标
var a = [[0,0],[0,0],[0,0],[0,0]];
/**
 * 定义随机数，使背景图中出现arr1中的任一图形
 * @type {Number}
 */
function randomHandle () {
    a=[];
    for(var i = 0; i< arr1[randomsA][0].length; i++){
        for(var j =0; j<arr1[randomsA][0][i].length; j++){
            if (arr1[randomsA][randomsB][i][j] === 1) {
                fillHandle(3 + firstX*20 + j*20, 3 + firstY*20+ i*20, 20, 20, 'rgba(111,11,11,.8)');
                var arrN = [];
                arrN.push(firstX + j, firstY + i);
                a.push(arrN);
            }
        }
    }
}
randomHandle();

/**
 * arr数组值为1的画出图形
 */
function arrHandle () {
    for (var i = 0; i < 25; i++) {
        for (var j = 0; j < 15; j++) {
            if (arr[i][j] === 1) {
                fillHandle(3 + j*20, 3 + i*20, 20, 20,'rgba(111,11,11,.8)');
            }
        }
    }
}
var timer1 =  setInterval(timeHandle, 300);
/*
*触底判断: 一个完整图形绘画完毕即为触底
 */
function chudi () {
    for(var i = 0; i < a.length; i++){
        if(arr[a[i][1] + 1][a[i][0]] === 1){
            return false;
        }else if(i === a.length -1){
            return true;
        }
    }
}

/**
 * 点击重玩
 */
function restartHandle () {
    overDom.style.display = 'none';
    a = [[0,0],[0,0],[0,0],[0,0]];
    arr = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    firstY = 0;
    firstX = 7;
    ctx.clearRect(0,0,309,509);
    randomHandle();
    timer1 =  setInterval(timeHandle, 300);
    document.addEventListener("keydown", clickHandle);
}
/**
 * 点击事件
 * @param ev
 */
function clickHandle (ev) {
    keycode[ev.keyCode] = true;
}
/**
 * 消行
 */
function xiaoHandle () {
    // 如果触底将方块在arr上对应的位置的值赋为1
    for (var i = 0; i < a.length; i++) {
        arr[a[i][1]][a[i][0]] = 1;
    }
    var xiaoArr = []; // 记录需要消除的行号index
    // 消行
    for(var i = arr.length -1; i>= 0; i--){
        var xiaohang = true;
        for(var j = 0; j <15; j++){
            if(arr[i][j] === 0){
                xiaohang = false;
            }else if(j === arr[i].length - 1){
                // 满足消行
                if(xiaohang){
                    xiaoArr.push(i);
                    arrflag = true;
                }
            }
        }
    }
    if (arrflag) {
        xiaoArr.reverse();
        xiaoArr.forEach(function (e, i) {
            arr.splice(e,1);
            arr.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        });

        // arr.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        console.log(arr)
        arrflag = false;
    }
    randomsA = parseInt(Math.random() * 7);
    randomsB = parseInt(Math.random() * 4);
    firstY = 0;
    firstX = 7;
    a = [[0, 0], [0, 0], [0, 0], [0, 0]];
}
/**
 * 定时器
 */
function timeHandle () {
    if (a[a.length - 1][1] <= 23) {
        if(chudi()){
            ctx.clearRect(0,0,309,509);
            a = [];
            arrHandle();
            firstY += 1;
            randomHandle();
        }else {
            if (a[0][1] === 1) {
                overDom.style.display = 'block';
                clearInterval(timer1);
                restartDom.addEventListener('click',restartHandle);
                document.removeEventListener("keydown", clickHandle);
            } else {
                xiaoHandle();
            }
        }
    } else {
        xiaoHandle();
    }
}
setInterval(function () {
    /**
     * 点击left键时，方块向左移动
     */
    if (keycode[37]) {
        if (firstX === 0) {
            firstX = 0;
        } else {
            firstX--;
            for (var i =0; i<a.length; i++) {
                if (arr[a[i][1]][a[i][0] - 1] === 1) {
                    firstX = a[i][0];
                }
            }
            a.forEach(function (e, i) {
                ctx.clearRect(e[0]*20,e[1]*20,30,30);
            });
            a = [];
            for(var i = 0; i< arr1[randomsA][0].length; i++){
                for(var j =0; j<arr1[randomsA][0][i].length; j++){
                    if (arr1[randomsA][randomsB][i][j] === 1) {
                        fillHandle(3 + firstX*20 + j*20, 3 + firstY*20+ i*20, 20, 20, 'rgba(111,11,11,.8)');
                        var arrN = [];
                        arrN.push(firstX + j, firstY + i);
                        a.push(arrN);
                    }
                }
            }
        }
    }
    /**
     * 点击right键时，方块向右移动
     */
    else if (keycode[39]) {
        var flgg = false;
        for (var i = 0; i< a.length; i++){
            if (a[i][0] >= 14) {
                flgg = true;
            }
            else if (arr[a[i][1]][a[i][0] + 1] === 1) {
                flgg = true;
                firstX = firstX;
                a[i][0] = firstX;
                console.log(firstX, a[i][0],'8999')
            }
        }

        if(!flgg){
            firstX ++;
        }
        a.forEach(function (e, i) {
            ctx.clearRect(e[0]*20,e[1]*20,30,30)
        });
        a = [];
        for(var i = 0; i< arr1[randomsA][0].length; i++){
            for(var j =0; j<arr1[randomsA][0][i].length; j++){
                if (arr1[randomsA][randomsB][i][j] === 1) {
                    fillHandle(3 + firstX*20 + j*20, 3 + firstY*20+ i*20, 20, 20, 'rgba(111,11,11,.8)');
                    var arrN = [];
                    arrN.push(firstX + j, firstY + i);
                    a.push(arrN);
                }
            }
        }
    }
    /**
     * up
     */
    else if (keycode[38]) {
        if (flag) {
            flag = false;
            upRan === 3 ? upRan = 0 : upRan = upRan + 1;
            randomsB = upRan;
            a.forEach(function (e, i) {
                ctx.clearRect(e[0]*20,e[1]*20,30,30)
            });
            a = [];
            for (var i = 0; i < arr1[randomsA][0].length; i++) {
                for (var j = 0; j < arr1[randomsA][0][i].length; j++) {
                    if (arr1[randomsA][upRan][i][j] === 1) {
                        fillHandle(3 + firstX*20 + j*20, 3 + firstY*20+ i*20, 20, 20, 'rgba(111,11,11,.8)');
                        var arrN = [];
                        arrN.push(firstX + j, firstY + i);
                        a.push(arrN);
                    }
                }
            }
        }
    }
    /**
     * 点击Down键时，方块向下移动
     */
    else if (keycode[40]) {
        if(fladown){
            fladown = false;
            clearInterval(timer1);
            timer1 =  setInterval(timeHandle, 100);
        }
    }
},100);
var keycode = {};
document.addEventListener("keydown", clickHandle);

document.addEventListener("keyup", function (ev) {
    if (keycode[40]) {
        clearInterval(timer1);
        timer1 =  setInterval(timeHandle, 300);
        fladown = true;
    }
    if (keycode[38]) {
        clearInterval(timer1);
        timer1 =  setInterval(timeHandle, 300);
        flag = true;
    }
    keycode[ev.keyCode] = false;
});