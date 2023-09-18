document.getElementById('resumeUpload').addEventListener('change', function () {
    var fileName = this.value.split('\\').pop(); // Get the selected file name
    var label = this.parentNode.querySelector('label');
    if (fileName) {
        label.innerHTML = fileName;
    } else {
        label.innerHTML = 'Upload your resume';
    }
});
