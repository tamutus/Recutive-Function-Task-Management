import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateWithoutTaskInputSchema } from './PrivateTagsToTasksCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema } from './PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema } from './PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';

export const PrivateTagsToTasksCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTasksCreateNestedManyWithoutTaskInputSchema;
