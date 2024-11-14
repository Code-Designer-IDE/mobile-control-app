let server;

document.getElementById('connect').addEventListener('click', async () => {
    try {
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        server = await device.gatt.connect();
        const deviceName = device.name || "Nieznane urządzenie";
        alert("Połączono z urządzeniem: " + deviceName);
        document.getElementById('disconnect').disabled = false;

    } catch (error) {
        console.error('Błąd:', error);
    }
});

document.getElementById('disconnect').addEventListener('click', () => {
    if (server && server.connected) {
        server.disconnect();
        alert("Rozłączono z urządzeniem" + deviceName);
        document.getElementById('disconnect').disabled = true;
    } else {
        alert("Brak aktywnego połączenia");
    }
});