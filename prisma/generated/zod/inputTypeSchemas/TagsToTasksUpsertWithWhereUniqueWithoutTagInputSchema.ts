import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithoutTagInputSchema } from './TagsToTasksUpdateWithoutTagInputSchema';
import { TagsToTasksUncheckedUpdateWithoutTagInputSchema } from './TagsToTasksUncheckedUpdateWithoutTagInputSchema';
import { TagsToTasksCreateWithoutTagInputSchema } from './TagsToTasksCreateWithoutTagInputSchema';
import { TagsToTasksUncheckedCreateWithoutTagInputSchema } from './TagsToTasksUncheckedCreateWithoutTagInputSchema';

export const TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsToTasksUpdateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema;
