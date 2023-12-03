import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithoutTaskInputSchema } from './TagsToTasksUpdateWithoutTaskInputSchema';
import { TagsToTasksUncheckedUpdateWithoutTaskInputSchema } from './TagsToTasksUncheckedUpdateWithoutTaskInputSchema';
import { TagsToTasksCreateWithoutTaskInputSchema } from './TagsToTasksCreateWithoutTaskInputSchema';
import { TagsToTasksUncheckedCreateWithoutTaskInputSchema } from './TagsToTasksUncheckedCreateWithoutTaskInputSchema';

export const TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
