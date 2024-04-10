// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: {
//     // You may need to enable `preflight` to allow arbitrary CSS
//     // Refer to Tailwind CSS documentation for details:
//     // https://tailwindcss.com/docs/preflight
//     preflight: false,
//   },
//   variants: {
//     extend: {},
//   },
//   // Define custom CSS within the `@layer components` directive
//   // This will ensure the custom CSS is processed after Tailwind CSS utilities
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   // Add your custom CSS within the `@layer components` directive
//   // This will include your custom CSS alongside Tailwind CSS utilities
//   corePlugins: {
//     preflight: false, // Disable preflight to allow arbitrary CSS
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [
//     // function ({ addComponents }) {
//     //   addComponents({
//     //     // Define your custom CSS components here
//     //     // Example custom checkbox styles
//     //     '.checkbox + .checkbox-label::before': {
//     //       content: '""',
//     //       display: 'inline-block',
//     //       width: '16px',
//     //       height: '16px',
//     //       // backgroundColor: '#34D399', // Green-200
//     //       border: '1px solid #34D399', // Green-200
//     //       borderRadius: '2px',
//     //       marginRight: '6px',
//     //       verticalAlign: 'middle',
//     //     },
//     //     '.checkbox:checked + .checkbox-label::after': {
//     //       content: "'✔'", /* Unicode checkmark character */
//     //       display: "inline",
//     // //       position: "absolute",
//     // // bottom: "32px",
//     // // left: "54px",
//     //       width: "16px",
//     //       height: "16px",
//     //       color: "#10b981", /* Green-500 */
//     //       fontSize: "12px",
//     //       lineHeight: "16px",
//     //       textAlign: "center",
//     //       marginRight: "6px",
//     //       verticalAlign: "middle",
//     //     },
//     //     '.checkbox:focus + .checkbox-label::before': {
//     //       outline: '2px solid #34D399', // Green-200
//     //     },
//     //   });
//     // },
//   ],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
