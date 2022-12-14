// const url = `https://azure.microsoft.com/${navigator.language}/`

document.querySelector('html').lang = navigator.language

const infoAlert = (text,title) => {
    return new Promise((resolve,reject) => {
        Swal.fire({
            title:title,
            html:`<h3 style="animation: text-color 4s linear infinite; font-family:sans-serif;">${text}</h3>`,
            icon:'info',
            timer:8000,
            timerProgressBar:true
            /*,footer:`<a href="javascript:open('${url}')" style="color:yellow">Anuncio =></a>`*/
        })
        resolve()
    })
}

const warningAlert = (textError,title) => {
    return new Promise((resolve,reject) => {
        Swal.fire({
            title:title,
            text:textError,
            icon:'warning',
            timer:4000,
            timerProgressBar:true
            /*,
            footer:`<a href="javascript:open('${url}')" style="color:yellow">Anuncio</a>`*/
        })
        resolve()
    })
}
let title = `tu escribiste esto
                    ↓`
const app = new Vue({
    el:"#root",
    data() {
        return { 
            text:''
        }
    },
    methods: {
        async changeText () {
            this.text === '' ? await warningAlert('no se a escrito nada','advertencia') : await infoAlert(this.text,title)
            this.text = ''
        }
    }
});