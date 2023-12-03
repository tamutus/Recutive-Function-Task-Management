import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksScalarWhereInputSchema } from './TagsToTasksScalarWhereInputSchema';
import { TagsToTasksUpdateManyMutationInputSchema } from './TagsToTasksUpdateManyMutationInputSchema';
import { TagsToTasksUncheckedUpdateManyWithoutTagInputSchema } from './TagsToTasksUncheckedUpdateManyWithoutTagInputSchema';

export const TagsToTasksUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsToTasksUpdateManyMutationInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default TagsToTasksUpdateManyWithWhereWithoutTagInputSchema;
