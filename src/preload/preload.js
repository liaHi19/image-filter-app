import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});

// The preload script contains the bridge that connects when the web app running on the renderer process to native capabilities from the underlying operating system. The exposeInMainWorld function is used to explicity expose the Electron APIs that the web app can call.
