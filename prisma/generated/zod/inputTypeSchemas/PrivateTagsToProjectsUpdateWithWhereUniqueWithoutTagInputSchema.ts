import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithoutTagInputSchema } from './PrivateTagsToProjectsUpdateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema';

export const PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema;
