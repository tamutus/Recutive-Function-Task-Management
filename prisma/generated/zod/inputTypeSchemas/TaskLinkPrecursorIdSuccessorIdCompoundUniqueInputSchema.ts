import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema: z.ZodType<Prisma.TaskLinkPrecursorIdSuccessorIdCompoundUniqueInput> = z.object({
  precursorId: z.number(),
  successorId: z.number()
}).strict();

export default TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema;
