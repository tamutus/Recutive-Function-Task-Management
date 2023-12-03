import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillLinkPrecursorIdSuccessorIdCompoundUniqueInput> = z.object({
  precursorId: z.number(),
  successorId: z.number()
}).strict();

export default SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema;
