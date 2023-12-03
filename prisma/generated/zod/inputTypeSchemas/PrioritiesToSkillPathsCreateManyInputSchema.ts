import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsCreateManyInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManyInput> = z.object({
  skillPathId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsCreateManyInputSchema;
