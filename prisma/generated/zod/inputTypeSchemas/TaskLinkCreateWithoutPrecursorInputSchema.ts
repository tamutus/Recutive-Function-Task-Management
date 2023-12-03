import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskCreateNestedOneWithoutSuccessorsInputSchema } from './TaskCreateNestedOneWithoutSuccessorsInputSchema';

export const TaskLinkCreateWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkCreateWithoutPrecursorInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  successor: z.lazy(() => TaskCreateNestedOneWithoutSuccessorsInputSchema)
}).strict();

export default TaskLinkCreateWithoutPrecursorInputSchema;
