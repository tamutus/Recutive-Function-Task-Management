import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTagInputSchema } from './TagsToTaskTemplatesCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';

export const TagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema;
