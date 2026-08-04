import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/content/site";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--navara-tan)]/20">
        {member.fotoUrl ? (
          <Image
            src={member.fotoUrl}
            alt={`Foto de ${member.nombre}, ${member.rol}`}
            fill
            className="object-cover"
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
