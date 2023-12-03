import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTaskInputSchema } from './TagsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
