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
const dataMahasiswa=[
    {
        "NIM" : "105021810015",
        "fullname" : "Claudio Mambu",
        "gender" : "Male",
        "faculty" : "FIK",
        "prodi" : "Informatika"
    },
    {
        "NIM" : "105021810123",
        "fullname" : "Jordan ",
        "gender" : "Male",
        "faculty" : "FIK",
        "prodi" : "Sistem Informasi"
    },
    {
        "NIM" : "105021810915",
        "fullname" : "John Cena",
        "gender" : "Male",
        "faculty" : "FEB",
        "prodi" : "Manajemen"
    },
]
function change_data()
{
    while (tabel_data.children.length > 0)
    {
        tabel_data.removeChild(tabel_data.children[0])
    }
    for(let i=0; i<dataMahasiswa.length; i++){
        let row = tabel_data.insertRow();

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


// function refresh_student_table() {
//     //clear table every refresh
//     while(tabel_data.children.length > 0) {
//         tabel_data.removeChild(tabel_data.children[0]);
//     }

//     for(let i=0; i<dataMahasiswa.length; i++) {
//         let row = tabel_data.insertRow();
        
//         let NIM = row.insertCell(0);
//         NIM.innerHTML = dataMahasiswa[i].NIM;

//         let fullname = row.insertCell(1);
//         fullname.innerHTML = dataMahasiswa[i].fullname;

//         let gender = row.insertCell(2);
//         gender.innerHTML = dataMahasiswa[i].gender;

//         let faculty = row.insertCell(3);
//         faculty.innerHTML = dataMahasiswa[i].faculty;

//         let prodi = row.insertCell(4);
//         prodi.innerHTML = dataMahasiswa[i].prodi;

//         let removeButton_cell = row.insertCell(5);
        
//         let removeButton = document.createElement("button");
//         removeButton.classList.add("btn");
//         removeButton.classList.add("btn-danger");
//         removeButton.classList.add("shadow-sm");
//         removeButton.innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'/></svg>";
//         removeButton.addEventListener('click', (e) => {
//             student_data.splice(i, 1);
//             refresh_student_table_data();
//         })

//         removeButton_cell.appendChild(removeButton);
//     }
// }
