import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';

export const TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInputSchema;
