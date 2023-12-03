import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema';

export const PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateWithoutPrivateTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema;
