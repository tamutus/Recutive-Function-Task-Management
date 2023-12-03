import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManyPriorityInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsCreateManyPriorityInputSchema;
