# 🚀 bayas-api-playwright-framework-basic
A foundational API automation testing framework using Playwright, designed for scalable and efficient API validation.

---

## 🏗️ Framework Architecture

The repository has basic monolithic test scripts:

```text
├── tests/                  # Test specifications organized by feature/domain
├── playwright.config.ts    # Centralized framework and runner orchestration
└── package.json            # Dependencies, engines, and execution scripts
```

### Key Architectural Layers
* **Test layer (`tests/`):** Encapsulates HTTP verbs (`GET`, `POST`) leveraging Playwright's native `APIRequestContext`.

---

## 🛠️ Tech Stack & Prerequisites

* **Runtime Environment:** Node.js `>= 24.x`
* **Test Runner:** Playwright Test (TypeScript)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com
cd bayas-api-playwright-framework-basic
```

### 2. Install Project Dependencies
```bash
npm install
```

---

## 🧪 Test Execution

### Execute Full Regression Suite
```bash
npx playwright test
```

---

## 📊 Test Reporting & Monitoring

### HTML Local Reporting
Playwright automatically compiles an interactive HTML artifact capturing request headers, payload sizes, status codes, and timings upon execution completion.
```bash
npx playwright show-report
```

---

## 🤝 Contributing

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
