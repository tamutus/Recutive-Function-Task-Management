import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema';

export const TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateOrConnectWithoutTaggerInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema;
