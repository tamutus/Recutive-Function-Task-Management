import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  priorityId: z.number()
}).strict();

export default PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema;
