import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskLinkCreateManySuccessorInputSchema: z.ZodType<Prisma.TaskLinkCreateManySuccessorInput> = z.object({
  precursorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskLinkCreateManySuccessorInputSchema;
