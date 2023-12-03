import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsCreateManySkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManySkillPathInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsCreateManySkillPathInputSchema;
