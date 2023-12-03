import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const SkillLinkSelectSchema: z.ZodType<Prisma.SkillLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  info: z.boolean().optional(),
  hourGate: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default SkillLinkSelectSchema;
