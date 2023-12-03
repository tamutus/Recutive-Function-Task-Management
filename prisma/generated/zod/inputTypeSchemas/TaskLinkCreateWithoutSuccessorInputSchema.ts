import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskCreateNestedOneWithoutPrecursorsInputSchema } from './TaskCreateNestedOneWithoutPrecursorsInputSchema';

export const TaskLinkCreateWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkCreateWithoutSuccessorInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  precursor: z.lazy(() => TaskCreateNestedOneWithoutPrecursorsInputSchema)
}).strict();

export default TaskLinkCreateWithoutSuccessorInputSchema;
