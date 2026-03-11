const createdLink = document.querySelector("#createdLink");
const viewLink = document.querySelector("#viewLink");
const createLinkbtn = document.querySelector("#createLinkbtn")
const createLinkForm = document.querySelector("#createLinkForm")

const copyBtn = document.getElementById("copyBtn");
// const createdLink = document.getElementById("createdLink");



viewLink.addEventListener("click",()=>{
    createdLink.style.display = 'block';
    createLinkForm.style.display = 'none';
});


createLinkbtn.addEventListener("click",()=>{
    createdLink.style.display = 'none';
    createLinkForm.style.display = 'block';
});


copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(createdLink.href)
        .then(() => alert("Copied!"));
});
