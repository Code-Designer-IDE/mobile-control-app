let server;
let deviceName;

document.getElementById('connect').addEventListener('click', async () => {
    try {
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        server = await device.gatt.connect();
        deviceName = device.name || "Nieznane urządzenie";
        document.getElementById('device-name').textContent = "Połączono z: " + deviceName;
        document.getElementById('disconnect').disabled = false;

        document.getElementById('connect').style.display = 'none';
        document.getElementById('disconnect').style.display = 'block';
        document.getElementById('disconnect').disabled = false;

    } catch (error) {
        console.error('Błąd:', error);
        document.getElementById('device-name').textContent = "Błąd połączenia";
    }
});

document.getElementById('disconnect').addEventListener('click', () => {
    if (server && server.connected) {
        server.disconnect();
        document.getElementById('device-name').textContent = "Rozłączono z: " + deviceName;

        document.getElementById('disconnect').style.display = 'none';
        document.getElementById('connect').style.display = 'block';

        setTimeout(() => {
            document.getElementById('device-name').textContent = "Brak połączenia";
        }, 2000);
    } else {
        document.getElementById('device-name').textContent = "Brak aktywnego połączenia";
        setTimeout(() => {
            document.getElementById('device-name').textContent = "Brak połączenia";
        }, 5000);
    }
});