import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';

export const TagsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema;
