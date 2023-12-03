import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTagInputSchema } from './TagsToTaskTemplatesUpdateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateWithoutTagInputSchema } from './TagsToTaskTemplatesCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';

export const TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema;
