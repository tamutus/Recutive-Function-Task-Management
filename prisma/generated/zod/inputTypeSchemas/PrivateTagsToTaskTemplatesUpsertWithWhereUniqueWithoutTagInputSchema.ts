import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema;
