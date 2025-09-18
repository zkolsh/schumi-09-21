// generosamente donado desde https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const surname = this.surname.value.trim();
    if (!name || !surname) {
        alert("Por favor ingrese un nombre y apellido.");
        return;
    };

    const email = this.email.value.trim();
    if (!email) {
        alert("Por favor proporcione su dirección de correo.");
        return;
    };

    if (!validateEmail(email)) {
        alert("Por favor proporcione una dirección de correo válida.");
        return;
    };

    const phone = this.phone.value.trim();
    if (phone && phone.toString().length < 10) {
        alert("Por favor ingrese un número de teléfono válido.")
        return;
    };

    const payload = this.payload.value.trim();
    if (!payload) {
        alert("Por favor escriba su comentario.");
        return;
    };

    const cv = this.cv.value.trim();
    if (cv && cv.type !== 'application/pdf') {
        alert("Solo se admiten CVs en PDF.");
        return;
    };

    const gender = this.gender.value.trim();
    const birthDate = this.birthDate.value.trim();
    const subject = encodeURIComponent("Contacto de Tortres");
    const body = encodeURIComponent(`Nombre: ${name}
Apellido: ${surname}
E-Mail: ${email}
Género: ${gender}
Teléfono: ${phone}
Fecha de nacimiento: ${birthDate}
Mensaje: ${payload}`);
    const link = `mailto:alejandroschujman@ips.edu.ar?subject=${subject}&body=${body}`;
    window.location.href = link;
})