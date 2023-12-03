import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskLinkCreateManyPrecursorInputSchema: z.ZodType<Prisma.TaskLinkCreateManyPrecursorInput> = z.object({
  successorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskLinkCreateManyPrecursorInputSchema;
