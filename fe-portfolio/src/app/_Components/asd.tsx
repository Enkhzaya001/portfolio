// "use client";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         "service_0og7kdc", // Service ID
//         "template_kgf2o1c", // Template ID
//         form.current,
//         "yH3pPGX2EKRUlyhjW" // Public key (API key)
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           form.current?.reset();
//         },
//         (error) => {
//           alert("Failed to send message.");
//           console.error(error);
//         }
//       );
//   };

//   return (
//     <section className="bg-gray-100 rounded-md py-10 px-6" id="contact">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//         Let’s Connect ✉️
//       </h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="max-w-xl mx-auto space-y-4 text-black"
//       >
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           className="w-full p-3 rounded border"
//           required
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Your Email"
//           className="w-full p-3 rounded border"
//           required
//         />
//         <textarea
//           name="message"
//           rows={5}
//           placeholder="Message"
//           className="w-full p-3 rounded border"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
