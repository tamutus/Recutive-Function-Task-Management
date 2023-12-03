import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksCreateWithoutTaskInputSchema } from './PrivateTagsToTasksCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema;
