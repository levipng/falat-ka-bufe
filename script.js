//index
// pop up
setTimeout(function () {
    const toastEl = document.getElementById('myToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}, 1200);

// idő
idoh();
function idoh() {
    document.getElementById('time').innerText = (new Date().toLocaleTimeString());
    requestAnimationFrame(idoh);
}