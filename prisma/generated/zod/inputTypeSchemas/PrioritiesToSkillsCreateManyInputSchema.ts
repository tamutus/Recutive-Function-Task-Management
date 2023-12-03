import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsCreateManyInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManyInput> = z.object({
  priorityId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsCreateManyInputSchema;
