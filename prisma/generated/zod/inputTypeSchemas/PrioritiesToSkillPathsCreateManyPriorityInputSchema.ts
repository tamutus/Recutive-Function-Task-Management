import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManyPriorityInput> = z.object({
  skillPathId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsCreateManyPriorityInputSchema;
