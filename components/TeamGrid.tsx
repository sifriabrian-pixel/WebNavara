"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TeamMember } from "@/content/site";
import { TeamCard } from "@/components/TeamCard";
import { fadeUpStaggerVariants } from "@/lib/motion";

export function TeamGrid({ team }: { team: TeamMember[] }) {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {team.map((member, i) => (
        <motion.div
          key={member.nombre}
          custom={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <TeamCard member={member} />
        </motion.div>
      ))}
    </div>
  );
}
