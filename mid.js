// code untuk menampilkan dan menyembunyikan form
document.getElementById("showhide").addEventListener("click",function()
{
    const student = document.getElementById("add-student");
    const button = document.getElementById("showhide");
    if(student.style.display == "none"){
    student.style.display = "block"
    button.textContent="Hide Form Add New Student"
    }
    else{
    student.style.display="none"
    button.textContent="Show Form Add New Student"
    }
});

///////////////////===========///////////////////

const tabel_data=document.getElementById("isitabelmahasiswa");
const search=document.getElementById("searchData");
let dataMahasiswa=[
    
]
function change_data()
{
    while (tabel_data.children.length > 0)
    {
        tabel_data.removeChild(tabel_data.children[0])
    }
    for(let i=0; i<dataMahasiswa.length; i++){
        const row = tabel_data.insertRow();

        const NIM = row.insertCell(0);
        NIM.innerHTML = dataMahasiswa[i].NIM;

        const fullname = row.insertCell(1);
        fullname.innerHTML = dataMahasiswa[i].fullname;
        
        const gender = row.insertCell(2);
        gender.innerHTML = dataMahasiswa[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = dataMahasiswa[i].faculty;

        const prodi = row.insertCell(4);
        prodi.innerHTML = dataMahasiswa[i].prodi;

        let button_delete = row.insertCell(5);
        
        const deleteData = document.createElement("button");
        deleteData.classList.add("fas");
        deleteData.classList.add("fa-user-minus");
        deleteData.classList.add("btn-danger")


        deleteData.addEventListener('click', (e) =>{
            const peringatan = confirm ("Yakin, Ingin menghapus data ini ?");

            if(peringatan == true){
                dataMahasiswa.splice(i, 1);
                change_data();
            }
            else{
                //none
            }
        });

        button_delete.appendChild(deleteData);
    }
}
change_data();



function searchdata() {
    //clear table
    while(tabel_data.children.length > 0) {
        tabel_data.removeChild(tabel_data.children[0]);
    }
    //mengisi di table
    for(let i=0; i<dataMahasiswa.length; i++) {
        // Mengecek apakah nama ada di tabel (tidak case sensitive)
        if(dataMahasiswa[i].fullname.includes(search.value)){
        
        // Memasukkan semua data mahasiswa ke tiap cell tabel
        const row = tabel_data.insertRow();
        const NIM = row.insertCell(0);
        NIM.innerHTML = dataMahasiswa[i].NIM;

        const fullname = row.insertCell(1);
        fullname.innerHTML = dataMahasiswa[i].fullname;
        
        const gender = row.insertCell(2);
        gender.innerHTML = dataMahasiswa[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = dataMahasiswa[i].faculty;

        const prodi = row.insertCell(4);
        prodi.innerHTML = dataMahasiswa[i].prodi;

        let button_delete = row.insertCell(5);
        const deleteData = document.createElement("button");
        deleteData.classList.add("fas");
        deleteData.classList.add("fa-user-minus");
        deleteData.classList.add("btn-danger")


        deleteData.addEventListener('click', (e) =>{
            const peringatan = confirm ("Yakin, Ingin menghapus data ini ?");

            if(peringatan == true){
                dataMahasiswa.splice(i, 1);
                change_data();
            }
            else{
                //none
            }
        });

         button_delete.appendChild(deleteData);

        }
    }
}

// cari melalui fakultas
function searchFaculty() {
    let pilihFaculty = document.getElementById("faculty2");
    pilihFaculty = pilihFaculty.options[pilihFaculty.selectedIndex];
    
    while(tabel_data.children.length > 0) {
        tabel_data.removeChild(tabel_data.children[0]);
    }

    for(let i=0; i<dataMahasiswa.length; i++) {
        if(dataMahasiswa[i].faculty == pilihFaculty.text)
        {
        const row = tabel_data.insertRow();

        const NIM = row.insertCell(0);
        NIM.innerHTML = dataMahasiswa[i].NIM;

        const fullname = row.insertCell(1);
        fullname.innerHTML = dataMahasiswa[i].fullname;
        
        const gender = row.insertCell(2);
        gender.innerHTML = dataMahasiswa[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = dataMahasiswa[i].faculty;

        const prodi = row.insertCell(4);
        prodi.innerHTML = dataMahasiswa[i].prodi;

        let button_delete = row.insertCell(5);
        const deleteData = document.createElement("button");
        deleteData.classList.add("fas");
        deleteData.classList.add("fa-user-minus");
        deleteData.classList.add("btn-danger")


        deleteData.addEventListener('click', (e) =>{
            const peringatan = confirm ("Yakin, Ingin menghapus data ini ?");

            if(peringatan == true){
                dataMahasiswa.splice(i, 1);
                change_data();
            }
            else{
                //none
            }
        });

        button_delete.appendChild(deleteData);
        }

    }
}
// cari melalui program studi
function searchProdi() {
    let pilihprodi = document.getElementById("prodi2");
    pilihprodi = pilihprodi.options[pilihprodi.selectedIndex];
    
    while(tabel_data.children.length > 0) {
        tabel_data.removeChild(tabel_data.children[0]);
    }

    for(let i=0; i<dataMahasiswa.length; i++) {
        if(dataMahasiswa[i].prodi == pilihprodi.text)
        {
            const row = tabel_data.insertRow();

            const NIM = row.insertCell(0);
        NIM.innerHTML = dataMahasiswa[i].NIM;

        const fullname = row.insertCell(1);
        fullname.innerHTML = dataMahasiswa[i].fullname;
        
        const gender = row.insertCell(2);
        gender.innerHTML = dataMahasiswa[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = dataMahasiswa[i].faculty;

        const prodi = row.insertCell(4);
        prodi.innerHTML = dataMahasiswa[i].prodi;

        let button_delete = row.insertCell(5);
        const deleteData = document.createElement("button");
        deleteData.classList.add("fas");
        deleteData.classList.add("fa-user-minus");
        deleteData.classList.add("btn-danger")


        deleteData.addEventListener('click', (e) =>{
            const peringatan = confirm ("Yakin, Ingin menghapus data ini ?");

            if(peringatan == true){
                dataMahasiswa.splice(i, 1);
                change_data();
            }
            
        });

         button_delete.appendChild(deleteData);
        
        }
    }
}

let unklab = [
    {
    fakultas:"Pascasarjana",
    prodi:["Magister Manajemen","Magister Teologi"]
    },
    {
    fakultas:"Fakultas Filsafat",
    prodi:["Ilmu Filsafat"]
    },
    {
    fakultas:"Fakultas Keguruan dan Ilmu Pendidikan",
    prodi:["Pendidikan Agama", "Pendidikan Bahasa Inggris",
            "Pendidikan Ekonomi", "Pendidikan Luar Sekolah"]
    },
    {
    fakultas:"Fakultas Ekonomi dan Bisnis",
    prodi: ["Akuntansi", "Manajemen"]
    },
    {
    fakultas: "Fakultas Pertanian",
    prodi: ["Argoteknologi"]
    },
    {
    fakultas: "Fakultas Ilmu Komputer",
    prodi: ["Informatika","Sistem Informasi"]
    },
    {
    fakultas:"Fakultas Keperawatan",
    prodi: ["Keperawatan","Profesi Ners"]
    },
    {
    fakultas:"Akademi Sekretari Manajemen Indonesia Klabat",
    prodi: ["Sekretari (D3)"]
    },
];

const listfakultas = document.querySelector('#faculty1');

for(fak of unklab){
    const tagfakultas = document.createElement('option');
    const contentfakultas = document.createTextNode(fak.fakultas);
    tagfakultas.appendChild(contentfakultas);
    listfakultas.appendChild(tagfakultas);
}

const listprody = document.querySelector('#prodi1');
const pilihanprodi = document.createElement('option');

listfakultas.addEventListener('click',(e) =>
{
    const pilihfakultas = e.target.value;
    let index = 0;

    listprody.innerHTML = '<select class="form-control" id="faculty1"><option>-- SELECT PROGRAM OF STUDY --</option></select>';

    if(pilihfakultas == "Pascasarjana"){ 
        index = 0; }
    else if(pilihfakultas == "Fakultas Filsafat"){ 
        index = 1; }
    else if(pilihfakultas == "Fakultas Keguruan dan Ilmu Pendidikan"){ 
        index = 2; }
    else if(pilihfakultas == "Fakultas Ekonomi dan Bisnis"){ 
        index = 3; }
    else if(pilihfakultas == "Fakultas Pertanian"){ 
        index = 4; }
    else if(pilihfakultas == "Fakultas Ilmu Komputer") { 
        index = 5; }
    else if(pilihfakultas == "Fakultas Keperawatan"){ 
        index = 6; }
    else if(pilihfakultas == "Akademi Sekertaris Manajemen Indonesia Klabat"){ 
        index = 7; }

        for(s of unklab[index].prodi)
        {
            const tagForPrody = document.createElement('option');
            const isiprodi = document.createTextNode(s);    
    
            tagForPrody.appendChild(isiprodi);
            listprody.appendChild(tagForPrody);
            console.log(s);
        }
})
///////////////////////////////////////////////////
const AddStudent = document.querySelector("#tambahdata")
AddStudent.addEventListener("click",()=>{

    const new_nim = document.querySelector("#nim").value;
    const new_fullName =  document.querySelector("#fullName").value;
    const new_gender = document.querySelector("input[name='JK']:checked").value;
    const new_faculty = document.querySelector("#faculty1").options[document.querySelector("#faculty1").selectedIndex].value;
    const new_prody = document.querySelector("#prodi1").options[document.querySelector("#prodi1").selectedIndex].value;

    const newColumn = document.querySelector('#isitabelmahasiswa');
    newColumn.innerHTML = "";
    
    
    
    dataMahasiswa.push({
        nim : new_nim,
        fullName:new_fullName,
        gender:new_gender,
        faculty:new_faculty,
        programStudy:new_prody
    });
    
    updateList();

});
function updateList()
{
    const newColumn = document.querySelector('#isitabelmahasiswa');
    newColumn.innerHTML = "";

    for(student of dataMahasiswa)
    {
        const trTag = document.createElement("tr");
        for(value in student)
        {
            const tdTag = document.createElement("td");
            const text = document.createTextNode(student[value]);
            tdTag.appendChild(text);

            trTag.appendChild(tdTag);
            newColumn.appendChild(trTag);
        }
        //Button - Delete
        const tdTag = document.createElement("td");
        const icon = `<button onclick="deleteRow(this)" type="button" class="bg-danger fas fa-user-minus p-2"> </button>`;
        tdTag.innerHTML = icon;
        trTag.appendChild(tdTag);

    }
}

function deleteRow(btn) 
{
	var row = btn.parentNode.parentNode;
	new_nim = (row.querySelector("tr td").textContent);

	const cf = confirm(`You want to delete this student?`);
 
    if(cf == true)
    {		
        dataMahasiswa = dataMahasiswa.filter((s) =>
        {
			return s.nim != new_nim;
		});

		updateList();
        console.log(dataMahasiswa.length);
	}
}