import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';
import { TagsToTaskTemplatesUpdateManyMutationInputSchema } from './TagsToTaskTemplatesUpdateManyMutationInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInputSchema';

export const TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema;
