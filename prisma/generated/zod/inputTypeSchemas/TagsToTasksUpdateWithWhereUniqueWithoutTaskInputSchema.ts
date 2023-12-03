import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithoutTaskInputSchema } from './TagsToTasksUpdateWithoutTaskInputSchema';
import { TagsToTasksUncheckedUpdateWithoutTaskInputSchema } from './TagsToTasksUncheckedUpdateWithoutTaskInputSchema';

export const TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
