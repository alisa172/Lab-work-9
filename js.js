while (m!=5){
    var m = prompt("Оберіть функцію \n1 - оператор умови\n2 - цикл з лічильником\n3 - цикл while\n4 - введення з масиву\n5 - вихід",'')
    if (isNaN(m)==false){
        if (m<1 || m>5){
            alert("Некоректне число")
        }else {
            switch(m){
                case '1':case1_1();
                break
                case '2':case2_1();
                break
                case '3':case3_1();
                break
                case '4':case4_1();
            }
        }
}else alert('Ви ввели не число');
}
function case1_1(){
    let x = inputNumber('Ввід X',1.62);
    let y = inputNumber("Ввід Y",0.75);
    let z = inputNumber('Ввід Z',0.845);
    if (x<=z){
        let a=Math.pow(1+Math.pow(Math.abs(x+y)),3);
        alert('a='+a);
    }else{
        let b=Math.sqrt(Math.tan(z))+1;
    }
}

function case2_1(){
    let shag= inputNumber('Введіть шаг',0.5);
    let a= inputNumber('Введіть а',0.28);
    let b=inputNumber('Ведіть b',1.35);
    let x_n=inputNumber('Введіть початкове значення x',1.2);
    let x_k=+prompt('Введіть кінцеве значення x',7.5);
    if (x_n<x_k){
        for (x_n;x_n<=x_k;){
        let y=(Math.pow(Math.sin(a*x_n)),3)/(a*x_n+b);
        alert("При х="+x_n+" y="+y);  
        x_n=x_n+shag;
        }
    }else alert('Кінцеве значення х менше початкового');
}

function case3_1(){
    let shag= inputNumber('Введіть шаг',0.5);
    let a= inputNumber('Введіть а',1.28);
    let b=inputNumber('Ведіть b',1.35);
    let x_n=inputNumber('Введіть початкове значення x',1.2);
    let x_k=+prompt('Введіть кінцеве значення x',7.5);
    do{
        for (x_n;x_n<=x_k;){
         let y=(Math.pow(Math.sin(a*x_n)),3)/(a*x_n+b);
         alert("При х="+x_n+" y="+y);  
         x_n=x_n+shag;}
    }while(x_n<x_k)
}

function case4_1(){
    var array=[];
    for (var i=0;i<4;i++){
        array[i]=inputNumber('Введіть '+(i+1)+' елемент масиву',1.38);
    }
    let a2 =0.28;
    let b2 =1.35;
    for (var i=0;i<4;i++){
     let y3=(Math.pow(Math.sin(a2*array[i])),3)/(a2*array[i]+b2);
     alert('При x = '+array[i]+',y ='+y3);}     
    }

    function isNumber(k){
        if (isNaN(k)==false){
            return(true)
        }else
        return false
       }
       function inputNumber(msg,def){
           do {
           var str=prompt(msg,def);
           } while (!isNumber(str))
           return parseFloat(str);
       }