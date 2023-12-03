import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';
import { TagsToTaskTemplatesUpdateManyMutationInputSchema } from './TagsToTaskTemplatesUpdateManyMutationInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
