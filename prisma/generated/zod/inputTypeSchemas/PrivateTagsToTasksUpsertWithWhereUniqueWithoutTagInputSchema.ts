import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithoutTagInputSchema } from './PrivateTagsToTasksUpdateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema';
import { PrivateTagsToTasksCreateWithoutTagInputSchema } from './PrivateTagsToTasksCreateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema;
