import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsCreateManySkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManySkillInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsCreateManySkillInputSchema;
