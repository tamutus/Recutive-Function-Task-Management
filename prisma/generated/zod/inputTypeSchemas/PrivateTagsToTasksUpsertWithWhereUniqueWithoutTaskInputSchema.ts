import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithoutTaskInputSchema } from './PrivateTagsToTasksUpdateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateWithoutTaskInputSchema } from './PrivateTagsToTasksCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
