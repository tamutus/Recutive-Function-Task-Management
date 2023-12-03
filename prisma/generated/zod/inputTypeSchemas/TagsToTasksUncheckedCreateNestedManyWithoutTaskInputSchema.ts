import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateWithoutTaskInputSchema } from './TagsToTasksCreateWithoutTaskInputSchema';
import { TagsToTasksUncheckedCreateWithoutTaskInputSchema } from './TagsToTasksUncheckedCreateWithoutTaskInputSchema';
import { TagsToTasksCreateOrConnectWithoutTaskInputSchema } from './TagsToTasksCreateOrConnectWithoutTaskInputSchema';
import { TagsToTasksCreateManyTaskInputEnvelopeSchema } from './TagsToTasksCreateManyTaskInputEnvelopeSchema';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';

export const TagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TagsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema;
