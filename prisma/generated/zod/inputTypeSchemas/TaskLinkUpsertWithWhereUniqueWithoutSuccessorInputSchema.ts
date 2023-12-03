import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithoutSuccessorInputSchema } from './TaskLinkUpdateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedUpdateWithoutSuccessorInputSchema } from './TaskLinkUncheckedUpdateWithoutSuccessorInputSchema';
import { TaskLinkCreateWithoutSuccessorInputSchema } from './TaskLinkCreateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskLinkUncheckedCreateWithoutSuccessorInputSchema';

export const TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkUpsertWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema;
