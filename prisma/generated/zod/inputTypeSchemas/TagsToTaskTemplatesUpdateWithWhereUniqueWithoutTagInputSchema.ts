import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTagInputSchema } from './TagsToTaskTemplatesUpdateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema';

export const TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema;
