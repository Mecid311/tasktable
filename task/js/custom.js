window.addEventListener('load', function () {
    loadData();
});



let id=0;
let books=[];

function book(kitabAdi,muellifi,neshirIli,cildNomresi,seyifeSayi){
this.id=++id;
this.kitabAdi=kitabAdi;
this.muellifi=muellifi;
this.neshirIli=neshirIli;
this.cildNomresi=cildNomresi;
this.seyifeSayi=seyifeSayi;
this.fullName=this.getFullName();
}
book.prototype.getFullName=function(){
    return `${this.kitabAdi} ${this.muellifi} ${this.cildNomresi}-ci cild `;
}

function addBooks(){
    let kitabAdi,muellifi,neshirIli,cildNomresi,seyifeSayi;
    kitabAdi=document.getElementById('kitabAdi').value;
    muellifi=document.getElementById('muellifi').value;
    neshirIli=document.getElementById('neshirIli').value;
    cildNomresi=document.getElementById('cildNomresi').value;
    seyifeSayi=document.getElementById('seyifeSayi').value;
    // fullName=document.getElementById('full').value;
    let book1=new book(kitabAdi,muellifi,neshirIli,cildNomresi,seyifeSayi);
    books.push(book1);

    addToTable(book1);
}

function addToTable(book){
    let tBody=document.querySelector('#books>tbody');
    let tr=document.createElement('tr');

    let thId=document.createElement('th');
    thId.textContent=book.id;
    tr.appendChild(thId);

    let tdAdi=document.createElement('td');
    tdAdi.textContent=book.kitabAdi;
    tr.appendChild(tdAdi);

    let tdMuellifi=document.createElement('td');
     tdMuellifi.textContent=book.muellifi;
    tr.appendChild(tdMuellifi);
    
    let tdIl=document.createElement('td');
     tdIl.textContent=book.neshirIli;
    tr.appendChild(tdIl);
    
    let tdNomresi=document.createElement('td');
     tdNomresi.textContent=book.cildNomresi;
    tr.appendChild(tdNomresi);
    
    let tdSayi=document.createElement('td');
    tdSayi.textContent=book.seyifeSayi;
    tr.appendChild(tdSayi);

    let fullName=document.createElement('td');
    fullName.textContent=book.fullName;
    tr.appendChild(fullName);


        tBody.appendChild(tr);
    
}
function saveData() {
    let stList = JSON.stringify(books);
    localStorage.setItem('books', stList);
}

function loadData(){
    try{
    let tBody=document.querySelector('#books>tbody');
    tBody.innerHTML="";
    let stList=localStorage.getItem('books');
    books=JSON.parse(stList);
    var ids=books.map(function(item,index)
    
    {
        addToTable(item);
        return item.id;
    });
    id=Math.max(...ids);
} catch(eror){
books=[];
}
}




    


     
