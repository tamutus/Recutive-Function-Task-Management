import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskTemplateLinkCreateManyPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateManyPrecursorInput> = z.object({
  successorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskTemplateLinkCreateManyPrecursorInputSchema;
