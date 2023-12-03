import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema';

export const PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema;
