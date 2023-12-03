import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskCreateNestedOneWithoutPrecursorsInputSchema } from './TaskCreateNestedOneWithoutPrecursorsInputSchema';
import { TaskCreateNestedOneWithoutSuccessorsInputSchema } from './TaskCreateNestedOneWithoutSuccessorsInputSchema';

export const TaskLinkCreateInputSchema: z.ZodType<Prisma.TaskLinkCreateInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  precursor: z.lazy(() => TaskCreateNestedOneWithoutPrecursorsInputSchema),
  successor: z.lazy(() => TaskCreateNestedOneWithoutSuccessorsInputSchema)
}).strict();

export default TaskLinkCreateInputSchema;
