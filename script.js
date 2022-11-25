const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');
const load = document.querySelector('.loaders');
const container = document.querySelector('.container')

let init = 0;

const botText = (data) => {
    return [
        "hallo, perkenalkan saya galbot, siapa nama mu?",
        `hai ${data?.nama}, berapa usia kamu?`,
        `oh ${data?.usia}, hobi kamu apa ya? `,
        `loh kok sama aku juga hobi ${data?.hobi}, btw kamu punya pacar gak?`,
        `oh ${data?.pacar}, ya udah kalau gitu, udahan yah?`
    ];
}

pertanyaan.innerHTML = botText()[0]

let userData = []

function botStart () {
    if(jawaban.value.length < 1) return alert('Silahkan isi jawaban dulu')
    
    init++;
    if(init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finished()
    } else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    load.style.display = 'block' 
    container.style.filter = 'blur(8px)'
    setTimeout(() => {
        pertanyaan.innerHTML = botText(jawabanUser)[init]
        load.style.display = 'none' 
        container.style.filter = 'none'
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = "";
}

function finished () {
    pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke galbot <3`
    jawaban.value = `never lose hope ya ${userData[0]} dan semngttt`;
}

function botEnd () {
    alert(`Terima kasih ${userData[0]} sudah berkunjung ke galbot, kamu akan kembali ke halaman pertama`)
    window.location.reload()
}
