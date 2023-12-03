import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithoutSuccessorInputSchema } from './TaskLinkUpdateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedUpdateWithoutSuccessorInputSchema } from './TaskLinkUncheckedUpdateWithoutSuccessorInputSchema';

export const TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkUpdateWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema;
