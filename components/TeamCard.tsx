import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/content/site";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] shadow-sm transition-shadow duration-[250ms] hover:shadow-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--navara-tan)]/20">
        {member.fotoUrl ? (
          <Image
            src={member.fotoUrl}
            alt={`Foto de ${member.nombre}, ${member.rol}`}
            fill
            className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User strokeWidth={1} className="h-16 w-16 text-[var(--navara-brown)]/40" />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="mb-1 font-serif text-base text-[var(--navara-ink)]">
          {member.nombre}
        </p>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--navara-sage)]">
          {member.rol}
        </p>
        <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
          {member.descripcion}
        </p>
      </div>
    </div>
  );
}
