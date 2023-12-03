import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUpdateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema';

export const TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema) ]),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema;
