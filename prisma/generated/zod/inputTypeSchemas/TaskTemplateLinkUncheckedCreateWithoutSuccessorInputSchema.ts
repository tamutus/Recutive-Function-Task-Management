import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedCreateWithoutSuccessorInput> = z.object({
  precursorId: z.number().int(),
  linkType: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema;
