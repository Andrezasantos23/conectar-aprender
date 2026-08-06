<script src="js/script.js"></script>

document.addEventListener("DOMContentLoaded", () => {

    // 1. FORMULÁRIO DE CONTATO
    const formContato = document.getElementById("form-contato");
    const msgContato = document.getElementById("mensagem-sucesso");

    if (formContato) {
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            msgContato.style.display = "block";
            msgContato.innerHTML = `Gratidão, <strong>${nome}</strong>! A sua mensagem foi enviada com sucesso`;
            formContato.reset();
        });
    }

    // 2. FORMULÁRIO DE VOLUNTÁRIOS
    const formVol = document.getElementById("form-voluntario");
    const msgVol = document.getElementById("msg-sucesso-vol");

    if (formVol) {
        formVol.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome-vol").value;
            msgVol.style.display = "block";
            msgVol.innerHTML = `Seja bem vindo!, <strong>${nome}</strong>! Recebemos sua inscrição para se juntar ao nosso time de voluntários. Vamos retornar em breve!`;
            formVol.reset();
        });
    }

// retornar ao topo
    const btnTopo = document.getElementById("btn-topo");
    if (btnTopo) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        });

        btnTopo.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    // Lógica para os formulários de agendamento de aulas
const ativarAgendamento = (idForm, idMsg) => {
    const form = document.getElementById(idForm);
    const msg = document.getElementById(idMsg);
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            msg.style.display = "block";
            msg.innerHTML = `<strong>A sua sula foi agendada!</strong> Enviamos o link da aula ao vivo para o e-mail cadastrado.`;
            form.reset();
        });
    }
};

ativarAgendamento("form-agendamento-info", "msg-agendamento");
ativarAgendamento("form-agendamento-web", "msg-agendamento-web");
ativarAgendamento("form-agendamento-seg", "msg-agendamento-seg");

});

