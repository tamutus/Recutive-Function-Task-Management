import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithoutPrecursorInputSchema } from './TaskLinkUpdateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedUpdateWithoutPrecursorInputSchema } from './TaskLinkUncheckedUpdateWithoutPrecursorInputSchema';

export const TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkUpdateWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema;
