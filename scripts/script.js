let arr=[];
let cnt=0;
let n;
let array=document.getElementsByClassName('array')[0];
console.time('swapElements');


const generateElements=()=>{
    cnt=0;
    if(document.getElementById('algo').value==0){
        alert("Please select an algorithm");
        return;
    }
    document.getElementById('sortBtn').disabled=false;
    arr=[];
    array.innerHTML="";
    n=document.getElementById('num').value;
    if(n=="") alert("Enter number of elements to continue...");
    console.log(n);
    for(i=0;i<n;i++) arr.push(Math.ceil(Math.random()*400));
    console.log(arr);
    displayElements(arr);
}


const displayElements = (arr)=>{
    for(i=0;i<arr.length;i++){
        const div=document.createElement('div');
        // div.innerText = arr[i];
        div.classList=['elements'];
        div.id=i;
        // div.style.marginLeft=`${60*i}px`;
        if(window.innerWidth>=1024) div.style.width=`${window.innerWidth/(2*(arr.length+5))}px`;
        else div.style.width=`${window.innerWidth/(arr.length+5)}px`;
        div.style.height=`${arr[i]}px`;
        div.style.borderBottomLeftRadius='50px';
        div.style.borderBottomRightRadius='50px';
        document.getElementsByClassName('array')[0].appendChild(div);
    }
}


const sortElements = async ()=>{
    console.log(arr);
    document.getElementById('sortBtn').disabled=true;
    const method=document.getElementById('algo').value;
    const n=arr.length;
    if(method==0) alert("Please select an algorithm");   
    else if(method==1) bubbleSort(n);
    else if(method==2) insertionSort(n);
    else if(method==3) selectionSort(n);
    // displayElements(arr);
}

// Swap by Id
const swapById = async(i,j)=>{
    let a=document.getElementById(i).style.height;
    let b=document.getElementById(j).style.height;

    if(Number(a.slice(0,-2)) > Number(b.slice(0,-2))){
        cnt++;
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000/n);
        });

        let result = await promise.then(()=>{
            const tmp=a;
            // console.log(a,b);
            document.getElementById(i).style.height=b;
            // document.getElementById(j).id=i;
            document.getElementById(j).style.height=tmp;
            // document.getElementById(i).id=j;
        });
    }
    
}

const correctPos = (n)=>{
    document.getElementById(n).style.background="#2ecc72";
}

const showPicked=(i,j)=>{
    document.getElementById(i).style.background='#00CCCD';
    document.getElementById(j).style.background='#00CCCD';
}


const remPicked=(i,j)=>{
    document.getElementById(i).style.background='#99AAAB';
    document.getElementById(j).style.background='#99AAAB';
}


// // Sort by class (ANIMATION DOESN'T WORK)
// const swap= async (i,j)=>{
//     const a=document.getElementsByClassName('elements')[i];
//     const b=document.getElementsByClassName('elements')[j];
//     // if(arr[i]>arr[j]){
//     if(Number(a.innerText) > Number(b.innerText)){
//         // const tmp=arr[i];
        
//         cnt++;
//         const tmp =a.innerText;
//         // arr[i]=arr[j];
//         a.innerText = b.innerText;
//         // arr[j]=tmp;
//         b.innerText = tmp;
//     }
// }

// // Swap by interchanging margin-left
// const swapByMarginLeft= async(i,j)=>{
//     const a=document.getElementById(i);
//     const b=document.getElementById(j);
    
//     if(Number(a.innerText) > Number(b.innerText)){
//         cnt++;
//         if(j!=i+1){
//             a.style.transform='translateY(-75px)';
//             b.style.transform='translateY(75px)';
//         }
            
//             const tmp=window.getComputedStyle(b).marginLeft;
        
//             let promise = new Promise((resolve, reject) => {
//                 setTimeout(() => resolve("done!"), 400)
//             });

//             let result = await promise.then(()=>{
//                 b.style.marginLeft=window.getComputedStyle(a).marginLeft;
//                 b.id=i;
//                 a.style.marginLeft=tmp;
//                 a.id=j;
//             });

//         if(j!=i+1){
//             promise = new Promise((resolve, reject) => {
//                 setTimeout(() => resolve("done!"), 500)
//             });

//             result = await promise.then(()=>{
//                 a.style.transform='translateY(0px)';
//                 b.style.transform='translateY(0px)';
//             });
//         }  
            
        
//         let promise2 = new Promise((resolve, reject) => {
//             setTimeout(() => resolve("done!"), 1500)
//         });

//         let result2 = await promise2;
//     }
    
// }



const showVisual=(i,j)=>{

}
