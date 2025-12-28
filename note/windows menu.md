# Windows 11 - পুরাতন Right-Click Context Menu Enable করা

## সমস্যা
Windows 11 এ নতুন context menu আসে যেটাতে অনেক option লুকানো থাকে। "Show more options" click করতে হয়।

## সমাধান - পুরাতন Context Menu সবসময় দেখানো

### Step 1: Command Prompt বা PowerShell খুলুন (Administrator হিসেবে)
1. Start menu এ গিয়ে `cmd` বা `PowerShell` লিখুন
2. Right-click করে **"Run as administrator"** select করুন

### Step 2: নিচের Command Run করুন

```cmd
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

### Step 3: PC Restart করুন

অথবা Explorer restart করতে এই command run করুন:

```cmd
taskkill /f /im explorer.exe && start explorer.exe
```

---

## ফিরিয়ে আনতে চাইলে (নতুন Menu)

```cmd
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```

এরপর PC restart করুন।

---

## নোট
- এটা Registry পরিবর্তন করে, তাই Administrator permission লাগবে
- কোনো সমস্যা হলে দ্বিতীয় command দিয়ে আগের অবস্থায় ফিরিয়ে আনা যাবে
- Windows Update এর পর আবার করতে হতে পারে

---

**তারিখ:** December 29, 2025
