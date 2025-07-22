'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'Samsthi Group of Schools',
    image: '/SamasthiIcon.png',
    description: 'A seamless bridge for communication between schools and parents, with real-time updates.',
  },
  {
    title: 'Pista House',
    image: '/pistahouse.png',
    description: 'A food ordering platform with live order tracking and location-based delivery.',
  },
  {
    title: 'Love Hurts',
    image: '/lovehurtsIcon.png',
    description: 'An educational platform empowering users to address sexual health and social needs.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const imageVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.4,
    },
  },
};

export default function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-10 text-white text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <Card className="bg-[#1F1F1F] px-6  hover:scale-[1.03] transition-transform shadow-lg border border-white/15 flex flex-col items-center  text-center rounded-2xl">
              
              {/* Smaller Circular Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                className="w-10 h-10 rounded-full overflow-hidden  border border-white/10 shadow-sm"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full "
                />
              </motion.div>

              <CardContent className="p-0">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
