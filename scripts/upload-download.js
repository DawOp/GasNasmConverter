// Upload file

let uploadButton = document.getElementById("upload-button");
let realUpload = document.getElementById("real-upload");

uploadButton.addEventListener("click", function() {
    realUpload.click();    
});

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
    
    reader.onload = function() {
        inputEditor.setValue(reader.result);
    };
  
    reader.onerror = function() {
        console.log(reader.error);
    };
    
    document.getElementById('real-upload').value = "";
}

// Download file

let downloadButton = document.getElementById("download-button");

function downloadOutput(code) {
    let element = document.createElement('a');
    
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
    element.setAttribute('download','source.asm');
    element.style.display = 'none';
    
    document.body.appendChild(element);
    
    element.click();

    document.body.removeChild(element);
}

downloadButton.addEventListener("click", function() {
    downloadOutput(outputEditor.getValue());
})