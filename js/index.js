const body = document.querySelector('body');

// 오프캔버스 열기
function openOffcanvas() {
    body.classList.add('ev-OffcanvasOn')
}
// 오프캔버스 닫기
function closeOffcanvas() {
    body.classList.remove('ev-OffcanvasOn')
}

function openGolfer() {
    body.classList.add('choiceGolfer')
}

