var Notification = window.Notification || window.mozNotification || window.webkitNotification;

if (Notification.permission == 'denied') {
    alert('Debe aceptar las notificaciones en el escritorio');
}

function show(title, text) {
    if (typeof title === "object") {
        text = title.text;
        title = title.title;
    }
    window.setTimeout(function () {
        var instance = new Notification(
            title, {
                body: text,
                icon: "https://pongaunbecarioensuvida.files.wordpress.com/2015/01/pollo.jpg"
            }
        );
    }, 5000);

    return false;
}