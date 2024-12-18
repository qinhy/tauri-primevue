# Tauri App Template with PrimeVue and TailwindCSS

This repository is a template for building cross-platform desktop applications using **Tauri**, **PrimeVue**, and **TailwindCSS**.

## Features

- **Tauri**: Build secure, fast, and lightweight desktop apps.
- **PrimeVue**: Rich UI components for Vue.js.
- **TailwindCSS**: A utility-first CSS framework for styling.
- Pre-configured for optimal development with modern tools.

## Prerequisites

Before using this template, ensure you have the following installed:

1. **Node.js** (>= 16.x)
2. **Rust & Cargo**: Required for Tauri
   - [Install Rust](https://www.rust-lang.org/tools/install)
3. **Tauri CLI**:
   ```bash
   cargo install tauri-cli
   ```

## Installation

1. Clone this repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   cd tauri-app && yarn tauri dev
   ```

## Scripts

- `yarn tauri dev`: Start the Tauri app in development mode.
- `yarn tauri build`: Build the Tauri app for production.
- `yarn build`: Build the Vue app for Tauri.
- `yarn lint`: Run lint checks on the project.

## Project Structure

```
├── src/
│   ├── App.vue          # Main Vue application
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── main.ts          # Tauri's entry file
│   ├── ...
├── tailwind.config.js   # TailwindCSS configuration
├── package.json         # Node.js dependencies and scripts
├── tauri.conf.json      # Tauri configuration file
```

## Customization

1. **TailwindCSS**: Modify the `tailwind.config.js` file to extend Tailwind's theme, add plugins, or configure custom utilities.
2. **PrimeVue**: Use PrimeVue components by importing them into your Vue components. See the [PrimeVue documentation](https://primevue.org/documentation/) for details.

## Contribution

Feel free to open issues or create pull requests to improve this template. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Resources

- [Tauri Documentation](https://tauri.app/v1/guides/)
- [PrimeVue Documentation](https://primevue.org/documentation/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)