import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksCreateWithoutTaskInputSchema } from './TagsToTasksCreateWithoutTaskInputSchema';
import { TagsToTasksUncheckedCreateWithoutTaskInputSchema } from './TagsToTasksUncheckedCreateWithoutTaskInputSchema';

export const TagsToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTasksCreateOrConnectWithoutTaskInputSchema;
