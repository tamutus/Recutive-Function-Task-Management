import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema: z.ZodType<Prisma.TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInput> = z.object({
  precursorId: z.number(),
  successorId: z.number()
}).strict();

export default TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema;
