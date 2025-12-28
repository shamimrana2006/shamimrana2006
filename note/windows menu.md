# Windows 11 - Classic Context Menu

## Enable (পুরাতন Menu)

CMD/POWERSHELL Run as Admin:

```cmd
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

## Disable (নতুন Menu ফিরিয়ে আনা)

```cmd
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```

## Restart Explorer

```cmd
taskkill /f /im explorer.exe && start explorer.exe
```

---

_Admin permission প্রয়োজন | Windows Update এর পর আবার করতে হতে পারে_
