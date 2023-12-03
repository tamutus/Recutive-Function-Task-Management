import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateWithoutTagInputSchema } from './TagsToTasksCreateWithoutTagInputSchema';
import { TagsToTasksUncheckedCreateWithoutTagInputSchema } from './TagsToTasksUncheckedCreateWithoutTagInputSchema';
import { TagsToTasksCreateOrConnectWithoutTagInputSchema } from './TagsToTasksCreateOrConnectWithoutTagInputSchema';
import { TagsToTasksCreateManyTagInputEnvelopeSchema } from './TagsToTasksCreateManyTagInputEnvelopeSchema';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';

export const TagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksCreateWithoutTagInputSchema).array(),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTasksCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsToTasksCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTasksCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema;
