import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';
import { TagsToTaskTemplatesUpdateManyMutationInputSchema } from './TagsToTaskTemplatesUpdateManyMutationInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema';

export const TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema;
