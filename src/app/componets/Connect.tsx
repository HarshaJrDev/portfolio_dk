// 'use client';

// import { motion } from 'framer-motion';
// import { FaLinkedin } from 'react-icons/fa';

// const footerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 60,
//       damping: 15,
//       duration: 0.6,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.5,
//     },
//   }),
// };

// export default function Connect() {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={footerVariants}
//       className="text-white px-8 py-16 md:px-24"
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

//         {/* Left Section - Heading */}
//         <motion.div
//           variants={itemVariants}
//           custom={0}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-2xl md:text-7xl font-extrabold tracking-tight leading-tight">
//             LETS <br /> CONNECT
//           </h2>
//         </motion.div>

//         {/* Right Section - Contact + Social */}
//         <div className="text-sm md:text-lg justify-center items-center mt-12 space-y-6">

//           <motion.div
//             variants={itemVariants}
//             custom={1}
//             className="flex items-center gap-3"
//           >
//             <span>+91 9032223634</span>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             custom={2}
//           >
//             <a
//               href="https://linkedin.com/in/duddu-koti-41902b287"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-transparent hover:text-cyan-400 transition"
//             >
//               <FaLinkedin className="text-xl md:text-2xl text-white" />
//             </a>

//           </motion.div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }
'use client';

import { motion, Variants } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

// Typed footerVariants using Variants
const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Typed itemVariants to return a Variant object based on index
const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number): Variants['visible'] => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Connect() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="text-white px-8 py-16 md:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left Section - Heading */}
        <motion.div
          variants={itemVariants}
          custom={0}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-7xl font-extrabold tracking-tight leading-tight">
            LETS <br /> CONNECT
          </h2>
        </motion.div>

        {/* Right Section - Contact + Social */}
        <div className="text-sm md:text-lg justify-center items-center mt-12 space-y-6">

          <motion.div
            variants={itemVariants}
            custom={1}
            className="flex items-center gap-3"
          >
            <span>+91 9032223634</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            custom={2}
          >
            <a
              href="https://linkedin.com/in/duddu-koti-41902b287"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-transparent hover:text-cyan-400 transition"
            >
              <FaLinkedin className="text-xl md:text-2xl text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
