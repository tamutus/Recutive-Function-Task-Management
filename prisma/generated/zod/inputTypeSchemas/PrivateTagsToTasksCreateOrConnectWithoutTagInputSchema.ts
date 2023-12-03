import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksCreateWithoutTagInputSchema } from './PrivateTagsToTasksCreateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema;
