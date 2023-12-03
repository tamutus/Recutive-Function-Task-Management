import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkCreateWithoutPrecursorInputSchema } from './TaskLinkCreateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskLinkUncheckedCreateWithoutPrecursorInputSchema';

export const TaskLinkCreateOrConnectWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkCreateOrConnectWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskLinkCreateOrConnectWithoutPrecursorInputSchema;
