import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskLinkUncheckedCreateInputSchema: z.ZodType<Prisma.TaskLinkUncheckedCreateInput> = z.object({
  precursorId: z.number().int(),
  successorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskLinkUncheckedCreateInputSchema;
