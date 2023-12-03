import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateWithoutTagInputSchema } from './PrivateTagsToTasksCreateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToTasksCreateManyTagInputEnvelopeSchema } from './PrivateTagsToTasksCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';

export const PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTasksCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema;
