
//SWITCH-CASE

//örnek: hesap makinası

const s1= +prompt("1. sayıyı giriniz:")
const islem= prompt("islem giriniz +,-,/,*")
const s2= +prompt("2. sayıyı giriniz:")

if (isNaN(s1) || isNaN(s2)) {
    alert("Lütfen geçerli bir sayı giriniz")

}

if (islem ==="/" && s2===0) {
    alert("sıfıra bölme hatası")
}

let yekun=0

switch(islem){
    case "+":
        yekun=s1+s2
    break    

    case "-":
        yekun=s1-s2
    break 

     case "/":
    yekun=s1/s2
     break  

case "*":
yekun=s1*s2
break 

 default:
alert("Yanlıs işlem")
break  
}
console.log(`${s1} ${islem} ${s2} = ${yekun.toFixed(2)}`)

console.clear()


//FOR LOOP
//console.log("for")

 //? ornek: 50 kişinin notu girerek ortalamsı hesaplna kodu yazınız..........

 let sum = 0
 let i = 0
  for ( i; i<2 ; i++){
    const grade = Number(prompt(` Enter ${i+1}.grade`))
    sum= sum + grade
    console.log(sum)
  }

 console.log(i)
console.log(`AVG:${sum/i}`)


// geri yönde değişim

for (let i=10; i>=0; i--){
    console.log(i)
}

// aralık verme

let n1= 15
let n2= 25
 
let summ=0

if(n1>n2){
console.log("n2 should be bigger than n1")
} else{
    for (let i= n1; i<=n2; i++){
        summ+=i
    }
    console.log("SUM:", summ)
}


//? break-continue

for(let ii = 0; ii<=10; ii++){
    console.log(i)
    if(ii%2) {
        break    
    }
}