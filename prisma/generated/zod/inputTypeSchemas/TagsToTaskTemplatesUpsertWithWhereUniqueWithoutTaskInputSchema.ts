import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithoutTaskInputSchema } from './TagsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
