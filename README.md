# Minimal Discount Calculator PWA 📱

A clean, modern, and privacy-focused discount calculator built for mobile web. It works offline, supports Dark Mode, and includes sales tax calculations.

## ✨ Features

- **Mobile First:** Optimized for touch with large targets and numeric keypads (`inputmode="decimal"`).
- **Progressive Web App (PWA):** Installable on iOS and Android. Works 100% offline.
- **Dark Mode:** Auto-detects system preference + manual toggle.
- **Accessible:** Screen reader friendly (ARIA labels), focus rings, and pinch-zoom supported.
- **Smart Features:** Slider sync, sales tax toggle, and "Start Over" reset.
- **Secure:** No external dependencies, no tracking, and safe input handling.

## 🚀 How to Run Locally

Because this is a PWA with a Service Worker, you cannot simply open `index.html` in your browser (browsers block Service Workers on `file://` protocols for security).

1. **Clone the repo:**

    git clone [https://github.com/sanjeev40084/discount-calculator.git](https://github.com/sanjeev40084/discount-calculator.git)

2. **Navigate to the folder:**

    cd discount-calculator

3. **Run a local server:**
   You need a local server to test the Service Worker.
   
   *Using Python 3:*
   
    python3 -m http.server
   
   *Using VS Code:*
   Right-click `index.html` and select **"Open with Live Server"**.

## 🌐 How to Deploy (Free)

This project is static (HTML/CSS/JS only), so it is perfect for **GitHub Pages**.

1. Go to your repository **Settings**.
2. Click **Pages** on the left sidebar.
3. Under "Branch", select `main` and click **Save**.
4. GitHub will give you a live URL (e.g., `https://your-username.github.io/discount-calculator`).
5. Open that URL on your phone to install the app!

## 📂 Project Structure

- `index.html`: The main app structure, logic, and styles.
- `manifest.json`: Metadata allowing the app to be installed on home screens.
- `sw.js`: Service Worker script for offline caching.

## 📄 License

MIT License - feel free to use this for personal or commercial projects.
