import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';

export const PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema;
