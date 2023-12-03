import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedCreateWithoutPrecursorInput> = z.object({
  successorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema;
