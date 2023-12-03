import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
