import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUpdateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema';

export const TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema;
