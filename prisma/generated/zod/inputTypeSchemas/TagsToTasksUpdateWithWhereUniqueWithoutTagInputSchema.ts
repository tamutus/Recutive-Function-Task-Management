import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithoutTagInputSchema } from './TagsToTasksUpdateWithoutTagInputSchema';
import { TagsToTasksUncheckedUpdateWithoutTagInputSchema } from './TagsToTasksUncheckedUpdateWithoutTagInputSchema';

export const TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsToTasksUpdateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema;
