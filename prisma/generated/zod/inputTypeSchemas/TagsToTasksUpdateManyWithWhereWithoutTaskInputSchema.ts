import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksScalarWhereInputSchema } from './TagsToTasksScalarWhereInputSchema';
import { TagsToTasksUpdateManyMutationInputSchema } from './TagsToTasksUpdateManyMutationInputSchema';
import { TagsToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './TagsToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsToTasksUpdateManyMutationInputSchema),z.lazy(() => TagsToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema;
