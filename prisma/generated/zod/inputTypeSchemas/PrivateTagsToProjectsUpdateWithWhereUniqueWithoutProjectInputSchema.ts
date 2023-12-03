import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectsUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema';

export const PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema;
