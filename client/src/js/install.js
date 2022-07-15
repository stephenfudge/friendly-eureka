const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    console.log("log1");
    butInstall.classList.toggle('hidden', false);
    console.log("log2");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("log3");
    const promptEvent = window.deferredPrompt;
    console.log("log4");
    if (!promptEvent) {
        console.log("log5");
      return;
    }
    console.log("log6");
    promptEvent.prompt();
    console.log("log7");
    window.deferredPrompt = null;
    console.log("log8");
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("log9");
        window.deferredPrompt = null;
});