import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithoutPrecursorInputSchema } from './TaskLinkUpdateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedUpdateWithoutPrecursorInputSchema } from './TaskLinkUncheckedUpdateWithoutPrecursorInputSchema';
import { TaskLinkCreateWithoutPrecursorInputSchema } from './TaskLinkCreateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskLinkUncheckedCreateWithoutPrecursorInputSchema';

export const TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkUpsertWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema;
